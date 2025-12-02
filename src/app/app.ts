import { Component, signal } from '@angular/core';
import { email, Field, form, max, maxLength, min, minLength, pattern, required, submit, validate, validateHttp } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Field],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  formStudentValue = signal<FormStudent>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: 0
  });

  form = form<FormStudent>(this.formStudentValue, (schemaValue) => {
    required(schemaValue.firstName, { message: 'El nombre el requerido' }),    
    required(schemaValue.lastName, { message: 'El apellido el requerido', when: ({valueOf}) => {
      const value = valueOf(schemaValue.firstName);
      if (value != '') {
        return true
      }
      return false
    } }),
    required(schemaValue.email, { message: 'El email el requerido' }),
    required(schemaValue.phone, { message: 'El teléfono el requerido' }),
    required(schemaValue.age, { message: 'La edad el requerida' }),
    minLength(schemaValue.firstName, 2, { message: 'El mínimo de caracteres es 2' }),
    minLength(schemaValue.lastName, 2, { message: 'El mínimo de caracteres es 2' }),
    maxLength(schemaValue.firstName, 100, { message: 'El máximo de caracteres es 100' }),
    maxLength(schemaValue.lastName, 100, { message: 'El máximo de caracteres es 100' }),
    email(schemaValue.email, { message: 'El email no tiene un formato valido' }),
    pattern(schemaValue.phone, /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/, { message: 'El teléfono no tiene un formato valido' }),
    min(schemaValue.age, 13, { message: 'La edad minima es de 13 años' }),
    max(schemaValue.age, 100, { message: 'La edad maxima es de 100 años' }),
    validate(schemaValue.email, ({valueOf}) => {
      const valueEmail = valueOf(schemaValue.email)
      if (valueEmail.includes('@gmail.com') || valueEmail.includes('@outlook.com')) {
        return null;
      } else {
        return {
          message: 'El proveedor de correo electrónico no es valido',
          kind: 'notValidDomain'
        }
      }
    })
    // validateHttp(schemaValue.email, {
    //   request: ({value}) => `/api/email?email=${value}`,
    //   onSuccess: (response) => {
    //     return {
    //       kind: 'emailTaken',
    //       message: 'El correo ya esta en uso'
    //     };
    //   },
    //   onError: (error) => {
    //     return {
    //       kind: 'networkError',
    //       message: `Error de conexión - Error: ${error}`
    //     }
    //   }
    // })
  });

  ngOnInit() {
    this.formStudentValue.set({
      firstName: 'Giovanni',
      lastName: 'Garcia',
      email:'giovanni.g@edu.ar',
      phone: '555555555',
      age: 23
    })
  }

  save(event: SubmitEvent) {
    event.preventDefault();
    console.log(this.form());
    console.log(this.formStudentValue());
  }
  
}


interface FormStudent {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
}