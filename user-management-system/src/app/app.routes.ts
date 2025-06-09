import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: '', redirectTo: '/users', pathMatch: 'full' }
];
