import { Component } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { Validation } from '../../../../shared/components/validation/validation';
import { SubjectRequest } from '../../../models/requests/subject.request';

@Component({
  selector: 'app-add-or-edit-subject',
  standalone: true,
  imports: [FormsModule, Validation],
  templateUrl: './add-or-edit-subject.html',
  styleUrl: './add-or-edit-subject.scss',
})
export class AddOrEditSubject {
  subject: SubjectRequest = {
    name: '',
    category: '',
    scheduleDay: '',
    scheduleTimeFrom: '',
    scheduleTimeTo: '',
  };

  ngOnInit() {
    this.subject = {
      name: 'Matemáticas',
      category: 'Exactas',
      scheduleDay: 'Lunes',
      scheduleTimeFrom: '10:15',
      scheduleTimeTo: '12:15'
    }
  }

  save(form: FormGroup) {
    console.log(form);
  }
}

