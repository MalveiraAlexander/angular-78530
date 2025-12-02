import { Injectable } from '@angular/core';
import { SubjectRequest } from '../../models/requests/subject.request';

@Injectable({
  providedIn: 'root',
})
export class Subject {
  add(request: SubjectRequest) {
    console.log('Agregando Materia: ', request);
  }

  update(id: number, request: SubjectRequest) {
    console.log('Actualizando Materia: ', request);
  }
}
