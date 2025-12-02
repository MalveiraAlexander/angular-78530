import { Routes } from '@angular/router';
import { Main } from './main';
import { Student } from './pages/student/student';
import { Subject } from './pages/subject/subject';
import { AddOrEditStudent } from './pages/student/add-or-edit-student/add-or-edit-student';

export const routesMain: Routes = [
  {
    path: 'students',
    children: [
      {
        path: 'add',
        loadComponent: () => AddOrEditStudent,
        title: 'Administrador - Agregar Estudiante',
      },
      { path: '', loadComponent: () => Student, title: 'Administrador - Estudiantes' },
    ],
  },
  {
    path: 'subjects',
    children: [
      {
        path: 'add',
        loadComponent: () =>
          import('./pages/subject/add-or-edit-subject/add-or-edit-subject').then(
            (m) => m.AddOrEditSubject
          ),
        title: 'Administrador - Agregar Materia',
      },
      { path: '', loadComponent: () => Subject, title: 'Administrador - Materias' },
    ],
  },
  { path: '', redirectTo: 'students', pathMatch: 'full' },
];
