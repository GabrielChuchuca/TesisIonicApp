import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecursoAppPageRoutingModule } from './recurso-app-routing.module';

import { RecursoAppPage } from './recurso-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecursoAppPageRoutingModule
  ],
  declarations: [RecursoAppPage]
})
export class RecursoAppPageModule {}
