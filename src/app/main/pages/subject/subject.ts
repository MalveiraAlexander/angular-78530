import { Component, inject } from '@angular/core';
import { Search } from '../../../shared/services/search/search';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.html',
  styleUrl: './subject.scss'
})
export class Subject {

  searchService = inject(Search)
}
