import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from 'src/app/model/jwt-dto';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
authURL=' https://backendapr.herokuapp.com/auth/';

  constructor( private htttpClient:HttpClient) { }

  public nuevo(nuevoUsuario:NuevoUsuario):Observable<any>{
    return this.htttpClient.post<any>(this.authURL+'nuevo',nuevoUsuario);
  }

  public login(loginUsuario:LoginUsuario):Observable<JwtDto>{
    return this.htttpClient.post<JwtDto>(this.authURL+'login',loginUsuario);
  }
}
 