import { Component, inject, signal } from '@angular/core';
import { Menu } from './models/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Search } from '../shared/services/search/search';

@Component({
  selector: 'app-layout',
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

  searchService = inject(Search);

  menuItems = signal<Menu[]>([
    {
      label: 'Estudiantes',
      routerLink: 'students',
      icon: 'fa-duotone fa-light fa-screen-users'
    },
    {
      label: 'Materias',
      routerLink: 'subjects',
      icon: 'fa-duotone fa-light fa-books'
    }
  ])
}
