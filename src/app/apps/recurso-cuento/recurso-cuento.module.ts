import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecursoCuentoPageRoutingModule } from './recurso-cuento-routing.module';

import { RecursoCuentoPage } from './recurso-cuento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecursoCuentoPageRoutingModule
  ],
  declarations: [RecursoCuentoPage]
})
export class RecursoCuentoPageModule {}
