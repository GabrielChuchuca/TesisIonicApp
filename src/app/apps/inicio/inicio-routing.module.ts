import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children: [
      {
        path: 'actividad',
        children: [
          {
            path: '',
            loadChildren: () => import('../actividad/actividad.module').then( m => m.ActividadPageModule)
          }
        ]
      },
      {
        path: 'habilidad',
        children: [
          {
            path: '',
            loadChildren: () => import('../habilidad/habilidad.module').then( m => m.HabilidadPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/inicio/actividad',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/inicio/actividad',
    pathMatch: 'full'
  }
  /*,
  {
    path: 'actividad',
    loadChildren: () => import('./apps/actividad/actividad.module').then( m => m.ActividadPageModule)
  },
  {
    path: 'habilidad',
    loadChildren: () => import('./apps/habilidad/habilidad.module').then( m => m.HabilidadPageModule)
  },*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
