import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // in angular routes cannot start with a slash
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
];
