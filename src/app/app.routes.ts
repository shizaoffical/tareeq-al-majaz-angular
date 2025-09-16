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
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'about-us',
        loadComponent: () =>
          import('./pages/about/about.component').then((m) => m.AboutComponent),
      },

      {
        path: 'services',
        loadComponent: () =>
          import('./pages/services/services.component').then(
            (m) => m.ServicesComponent
          ),
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('./pages/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
      },
      {
        path: 'location',
        loadComponent: () =>
          import('./pages/location/location.component').then((m) => m.LocationComponent),
      },
      { path: '**', redirectTo: '/home' },
    ],
  },
];
