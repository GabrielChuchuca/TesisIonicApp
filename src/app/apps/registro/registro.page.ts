/* eslint-disable */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../../models/usuario';

import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nUsuario: Usuario = new Usuario();

  constructor(private ser: ServiciosService, private pRu:Router, private alertController: AlertController) { }

  ngOnInit() {
  }
  registra(){
    console.log(this.nUsuario)
    this.ser.nuevoUsuario(this.nUsuario).subscribe(resu => {
      if (resu.message == "El usuario ya existe"){
        this.presentAlert(resu.message)
      }else{
        this.presentAlert(resu.message)
        this.pRu.navigateByUrl('/home')
      }
    })
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}
