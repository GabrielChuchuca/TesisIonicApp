import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecursoAppPage } from './recurso-app.page';

const routes: Routes = [
  {
    path: '',
    component: RecursoAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecursoAppPageRoutingModule {}
