import { Component, inject, input, signal } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { Validation } from '../../../../shared/components/validation/validation';
import { SubjectRequest } from '../../../models/requests/subject.request';
import { SubjectService } from '../../../services/subject/subject';
import { Router } from '@angular/router';

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

  id = input<string>();
  loading = signal<boolean>(false);
  private subjectService = inject(SubjectService);
  private router = inject(Router);

  ngOnInit() {
    if (this.id()) {
      this.loading.set(true);
      this.subjectService.getById(this.id()!).subscribe({
        next: (data) => {
          this.subject = {
            name: data.name,
            category: data.category,
            scheduleDay: data.scheduleDay,
            scheduleTimeFrom: data.scheduleTimeFrom,
            scheduleTimeTo: data.scheduleTimeTo
          }
        },
        error: (err) => {
          console.log(err);        
        },
        complete: () => {
          this.loading.set(false);
        }
      });
    }
  }

  save(form: FormGroup) {
    if (this.id()) {
      this.subjectService.update(this.id()!, this.subject).subscribe({
        next: (data) => {
          console.log(data);        
        },
        error: (err) => {
          console.log(err);        
        },
        complete: () => {
          this.router.navigateByUrl('/s/subjects');
        }
      });
    } else {
      this.subjectService.add(this.subject).subscribe({
        next: (data) => {
          console.log(data);        
        },
        error: (err) => {
          console.log(err);        
        },
        complete: () => {
          this.router.navigateByUrl('/s/subjects');
        }
      });
    }
    
  }
}

