import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./apps/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./apps/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./apps/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'recursos',
    loadChildren: () => import('./apps/recursos/recursos.module').then( m => m.RecursosPageModule)
  },
  {
    path: 'recurso-app',
    loadChildren: () => import('./apps/recurso-app/recurso-app.module').then( m => m.RecursoAppPageModule)
  },
  {
    path: 'recurso-cuento',
    loadChildren: () => import('./apps/recurso-cuento/recurso-cuento.module').then( m => m.RecursoCuentoPageModule)
  },
  {
    path: 'recurso-juego',
    loadChildren: () => import('./apps/recurso-juego/recurso-juego.module').then( m => m.RecursoJuegoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
