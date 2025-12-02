import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Search } from '../../../shared/services/search/search';

@Component({
  selector: 'app-student',
  imports: [RouterLink],
  templateUrl: './student.html',
  styleUrl: './student.scss'
})
export class Student {

  searchService = inject(Search)
}
