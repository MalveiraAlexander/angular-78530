import { Injectable } from '@angular/core';
import { StudentRequest } from '../../models/requests/student.request';

@Injectable()
export class StudentService {
  

  add(request: StudentRequest) {
    console.log('Agregando Estudiante: ', request);    
  }

  update(id: number, request: StudentRequest) {    
    console.log('Actualizando Estudiante: ', request);    
  }


  ngOnDestroy() {
    console.log('Destruido');    
  }

}
