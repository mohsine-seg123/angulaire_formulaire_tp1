import { Routes } from '@angular/router';

import { TemplateForm } from './pages/template-form/template-form';
import { ReactiveForm } from './pages/reactive-form/reactive-form';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'template-form',
    pathMatch: 'full',
  },

  {
    path: 'template-form',
    component: TemplateForm,
  },

  {
    path: 'reactive-form',
    component: ReactiveForm,
  },

  {
    path: '**',
    redirectTo: 'template-form',
  },
];
