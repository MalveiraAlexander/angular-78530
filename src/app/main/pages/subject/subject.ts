import { Component, computed, effect, inject, signal } from '@angular/core';
import { Search } from '../../../shared/services/search/search';
import { RouterLink } from '@angular/router';
import { SubjectService } from '../../services/subject/subject';
import { SubjectResponse } from '../../models/response/subject.response';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subject',
  imports: [RouterLink],
  templateUrl: './subject.html',
  styleUrl: './subject.scss'
})
export class Subject {

  searchService = inject(Search);
  subjectService = inject(SubjectService);
  subjects = signal<SubjectResponse[]>([]);
  totalItems = signal<any[]>([]);
  loading = signal<boolean>(false);
  page = signal<number>(0);
  subjects2 = computed(() => {
    let test = this.subjectService.subjects.value();
    //Filtrar materia con nombre Matemáticas no por medio del search service
    test = test?.filter(subject => subject.name !== 'Matemáticas');    
    return test;
  });
  private subs?: Subscription;

  constructor() {
    effect(() => {
      this.getAll(this.searchService.query(), 0, 2);
    })
  }

  onPageChange(page: number) {
    console.log(page);
    
    this.page.set(page);
    this.getAll(this.searchService.query(), page, 2);
  }

  nextPage() {
    this.page.update(page => page + 1);
    this.getAll(this.searchService.query(), this.page(), 2);
  }

  previousPage() {
    this.page.update(page => page - 1);
    this.getAll(this.searchService.query(), this.page(), 2);
  }


  getAll(query?: string, page?: number, pageSize?: number) {
    this.loading.set(true);
    if (this.subs) {
      this.subs.unsubscribe();
    }
    console.log(query);
    console.log(page);
    console.log(pageSize);
    
    this.subs = this.subjectService.getAll(query, page, pageSize).subscribe({
      next: (data) => {
        console.log(data);
        this.subjects.set(data.body || []);
        const totalCountHeader = data.headers.get('X-Total-Count');
        if (totalCountHeader) {
          const totalCount = parseInt(totalCountHeader, 10);
          this.totalItems.set(new Array(totalCount));
        }
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
