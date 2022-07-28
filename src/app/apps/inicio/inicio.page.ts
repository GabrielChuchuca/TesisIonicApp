/* eslint-disable */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  sToken: string = "";

  constructor(pRuta: Router) { 
    this.sToken = sessionStorage.getItem('token') || "";
    if (this.sToken.length === 0) { pRuta.navigateByUrl('/login'); }
  }

  ngOnInit() {
  }

}
