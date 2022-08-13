import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecursoJuegoPageRoutingModule } from './recurso-juego-routing.module';

import { RecursoJuegoPage } from './recurso-juego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecursoJuegoPageRoutingModule
  ],
  declarations: [RecursoJuegoPage]
})
export class RecursoJuegoPageModule {}
