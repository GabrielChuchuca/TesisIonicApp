import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecursoJuegoPage } from './recurso-juego.page';

const routes: Routes = [
  {
    path: '',
    component: RecursoJuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecursoJuegoPageRoutingModule {}
