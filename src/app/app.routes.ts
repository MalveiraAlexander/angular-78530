import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'page1', loadComponent: () => import('./pages/page-one/page-one').then(m => m.PageOne), title: 'Clase1 - Página 1' },
    { path: 'page2', loadComponent: () => import('./pages/page-two/page-two').then(m => m.PageTwo), title: 'Clase1 - Página 2', data: {lastName: 'Valdez'} },
    { path: 'page2/:name', loadComponent: () => import('./pages/page-two/page-two').then(m => m.PageTwo), title: 'Clase1 - Página 2', data: {lastName: 'Calo', firstName: 'Agustina'}  },
    { path: '', redirectTo: 'page1', pathMatch: 'full' },
    { path: '**', loadComponent: () => import('./pages/errors/not-found/not-found').then(m => m.NotFound), title: 'Clase1 - Página no encontrada' }
];
