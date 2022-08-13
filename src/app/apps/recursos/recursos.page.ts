/* eslint-disable */
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.page.html',
  styleUrls: ['./recursos.page.scss'],
})
export class RecursosPage implements OnInit {
  sToken: string = "";
  sUsua: string;
  recu: any = []

  constructor(private ser:ServiciosService,private route:ActivatedRoute, private pRuta:Router, private sanitizer: DomSanitizer) { 
    this.sToken = sessionStorage.getItem('tokenI') || "";
    this.sUsua = sessionStorage.getItem('username') || '';
    if (this.sToken.length === 0) { pRuta.navigateByUrl('/login'); }
   }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      console.log(id)
    }
  }

}
