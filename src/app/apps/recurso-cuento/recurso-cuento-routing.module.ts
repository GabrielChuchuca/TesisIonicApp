import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecursoCuentoPage } from './recurso-cuento.page';

const routes: Routes = [
  {
    path: '',
    component: RecursoCuentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecursoCuentoPageRoutingModule {}
