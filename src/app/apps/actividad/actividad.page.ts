/* eslint-disable */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage implements OnInit {
  sToken: string = "";
  sUsua: string;
  resu: any = []

  constructor(private ser: ServiciosService, pRuta: Router) { 
    this.sToken = sessionStorage.getItem('tokenI') || "";
    this.sUsua = sessionStorage.getItem('username') || '';
    if (this.sToken.length === 0) { pRuta.navigateByUrl('/home'); }
    else{
      ser.get_actividades_libro().subscribe(res => {
        this.resu = res;
      }) 
    }
   }

  ngOnInit() {
  }

}
