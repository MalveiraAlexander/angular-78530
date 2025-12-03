import { Component, computed, inject, signal } from '@angular/core';
import { Search } from '../../../shared/services/search/search';
import { RouterLink } from '@angular/router';
import { SubjectService } from '../../services/subject/subject';
import { SubjectResponse } from '../../models/response/subject.response';

@Component({
  selector: 'app-subject',
  imports: [RouterLink],
  templateUrl: './subject.html',
  styleUrl: './subject.scss'
})
export class Subject {

  searchService = inject(Search);
  subjectService = inject(SubjectService);
  private subjects = signal<SubjectResponse[]>([]);
  loading = signal<boolean>(false);
  subjects2 = computed(() => {
    let test = this.subjectService.subjects.value();
    //Filtrar materia con nombre Matemáticas no por medio del search service
    test = test?.filter(subject => subject.name !== 'Matemáticas');    
    return test;
  });

  ngOnInit() {
    this.subjectService.subjects.reload();
    //this.getAll();
  }

  getAll() {
    this.loading.set(true);
    this.subjectService.getAll().subscribe({
      next: (data) => {
        this.subjects.set(data);
      },
      error: (err) => {
        console.log(err);    
        this.loading.set(false);    
      },
      complete: () => {
        this.loading.set(false);
      }
    });
  }

  onDelete(id: string) {
    this.subjectService.delete(id).subscribe({
      next: () => {},
      error: (err) => {
        console.log(err);        
      },
      complete: () => {
        this.getAll();
      }
    })
  }

}
