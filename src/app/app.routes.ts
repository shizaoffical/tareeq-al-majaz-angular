

import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { 
        path: 'home', 
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) 
      },
     
      { 
        path: 'services', 
        loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent) 
      },
      { 
        path: 'contact', 
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) 
      },
      { path: '**', redirectTo: '/home' }
    ]
  }
];