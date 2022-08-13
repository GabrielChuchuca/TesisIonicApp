/* eslint-disable */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.page.html',
  styleUrls: ['./habilidad.page.scss'],
})
export class HabilidadPage implements OnInit {
  sToken: string = "";
  sUsua: string;
  habi: any = []

  constructor(private ser:ServiciosService, pRuta: Router) { 
    this.sToken = sessionStorage.getItem('tokenI') || "";
    this.sUsua = sessionStorage.getItem('username') || '';
    if (this.sToken.length === 0) { pRuta.navigateByUrl('/home'); }
    else{
      ser.get_habilidades().subscribe(h => {
        this.habi = h;
      })
    }
   }

  ngOnInit() {
  }

}
