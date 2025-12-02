import { Component, inject, signal } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Validation } from '../../../../shared/components/validation/validation';
import { StudentService } from '../../../services/student/student';
import { StudentRequest } from '../../../models/requests/student.request';
import { Search } from '../../../../shared/services/search/search';

@Component({
  selector: 'app-add-or-edit-student',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    Validation
  ],
  templateUrl: './add-or-edit-student.html',
  styleUrl: './add-or-edit-student.scss',
  providers: [StudentService]
})
export class AddOrEditStudent {

  private studentService = inject(StudentService);
  searchService = inject(Search)
  // constructor(private studentService: Student){} //Antigua forma

  formArray = signal<FormArray>(new FormArray<FormGroup>([
    new FormGroup({
      name: new FormControl<string>('test', [Validators.required])
    }),
    new FormGroup({
      name: new FormControl<string>('test1', [Validators.required])
    })
  ]));
  
  form = signal<FormGroup>(new FormGroup({
    formIn: new FormGroup({
      test: new FormControl<string>('algo')
    }),
    firstName: new FormControl<string | undefined>(undefined, [Validators.maxLength(100), Validators.required, Validators.minLength(2)]),
    lastName: new FormControl<string | undefined>(undefined, [Validators.maxLength(100), Validators.required, Validators.minLength(2)]),
    email: new FormControl<string | undefined>(undefined, [Validators.email, Validators.required]),
    phone: new FormControl<string | undefined>(undefined, [Validators.pattern(/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/), Validators.required]),
    age: new FormControl<number | undefined>(undefined, [Validators.max(100), Validators.required, Validators.min(13)]),
  }))

  ngOnInit() {
    this.form().patchValue({
      firstName: 'Giovanni',
      lastName: 'Garcia',
      email:'giovanni.g@edu.ar',
      phone: '555555555',
      age: 23
    });
  }

  removeMailRequired() {
    this.form().controls['email'].removeValidators([Validators.required]);
    this.form().updateValueAndValidity();
  }

  addMailRequired() {
    this.form().controls['email'].addValidators([Validators.required]);
    this.form().updateValueAndValidity();
  }

  onSubmit() {
    console.log(this.form().value);

    const values: StudentRequest = {
      firstName: this.form().value.firstName,
      lastName: this.form().value.lastName,
      email: this.form().value.email,
      phone: this.form().value.phone,
      age: this.form().value.age
    }

    this.studentService.add(values);
  }
}


interface Form {
  name: FormControl,
  lastName: FormControl
}