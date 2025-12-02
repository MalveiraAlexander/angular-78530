import { Routes } from '@angular/router';
import { routesMain } from './main/main.routes';
import { routesAuth } from './auth/auth.routes';
import { Main } from './main/main';

export const routes: Routes = [
    { path: 's', children: routesMain, loadComponent: () => Main },
    { path: 'auth', children: routesAuth },
    { path: '', redirectTo: 's', pathMatch: 'full' }
];
