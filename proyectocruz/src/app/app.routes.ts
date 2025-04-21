import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./login/login.component').then((m) => m.LoginComponent);
        }
    },
    {
        path:'forgotpassword',
        loadComponent: () => {
            return import('./forgotpassword/forgotpassword.component').then((m) => m.ForgotpasswordComponent);
        }
    },
    {
        path:'home',
        loadComponent: () => {
            return import('./home/home.component').then((m) => m.HomeComponent);
        }
    },
    {
        path:'manual',
        loadComponent: () => {
            return import('./manual/manual.component').then((m) => m.ManualComponent);
        }
    },
    {
        path:'correo',
        loadComponent: () => {
            return import('./correo/correo.component').then((m) => m.CorreoComponent);
        }
    }
];
