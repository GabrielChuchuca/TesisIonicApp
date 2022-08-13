/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Usuario } from '../models/usuario';
import { AuthJWT } from '../models/AuthJWT';
import { Router } from '@angular/router';
import { Login } from '../models/Login';

const httpOptionsJWT = { headers: new HttpHeaders ({'Content-type': 'application/json'}) }

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  secAuth: AuthJWT = new AuthJWT();
  tResu: any;
  
  constructor(private usrHttp: HttpClient, private pRuta: Router) { }
  securityReset() { this.secAuth.jwt = ''; }
  nuevoUsuario(usua: Usuario): Observable<any> {
    return this.usrHttp.post("http://127.0.0.1:8000/users", usua, httpOptionsJWT);
  }

  logInJWT (dataUsua: Login)
  {
    console.log(dataUsua) 
    return this.usrHttp.post('http://127.0.0.1:8000/login', dataUsua, httpOptionsJWT).pipe
      (
        tap((vResp) =>
        {
          console.log(vResp);
          Object.assign(this.secAuth, vResp); this.tResu = vResp;
          sessionStorage.setItem('tokenI', this.secAuth.jwt); sessionStorage.setItem('username', dataUsua.username);
          sessionStorage.setItem('dIdI', this.tResu.resultado._id);
          sessionStorage.setItem('dCedulaI', this.tResu.resultado.cedula);
          sessionStorage.setItem('dApelNombI', this.tResu.resultado.apellido + " " + this.tResu.resultado.nombre);
          sessionStorage.setItem('dCedulaI', this.tResu.resultado.cedula);
          sessionStorage.setItem('dFechaNacI', this.tResu.resultado.fechaNacimiento);
          sessionStorage.setItem('dUnidadEduI', this.tResu.resultado.unidadEducativa);
        }),
        catchError(this.handleError)
      )
  }

  logOut()
  {
    this.securityReset();
    sessionStorage.clear();
    this.pRuta.navigateByUrl('/login');
  }
  handleError (pErra : any)
  {
    window.alert('Usuario y/o Clave no existe...');
    sessionStorage.clear();
    return throwError (pErra.error);
  }
  get_actividades_libro(){
    return this.usrHttp.get("http://127.0.0.1:8000/actividades", httpOptionsJWT);
  }

  get_one_resource(id: string){
    return this.usrHttp.get("http://127.0.0.1:8000/recurso/"+id, httpOptionsJWT);
  }

  get_habilidades(){
    return this.usrHttp.get("http://127.0.0.1:8000/habilidades", httpOptionsJWT);
  }
}
