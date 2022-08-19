import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/service/auth.service';
import { TokenService } from 'src/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  islogged=false;
  islogginfail=false;
  loginUsuario!:LoginUsuario;
  nombreUsuario!:string;
  password!:string;
  roles:string[]=[];
  errorMsj!:string;
  constructor(private tokenService:TokenService,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.islogged=true;
      this.islogginfail=false;
      this.roles=this.tokenService.getAuthorities();
    }
  }
    onLogin():void{
      this.loginUsuario= new LoginUsuario(this.nombreUsuario,this.password);
        this.authService.login(this.loginUsuario).subscribe(data=>{
        this.islogged=true;
        this.islogginfail=false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles=data.authorities;
        this.router.navigate(['']);

      },err=>{
        this.islogged=false;
        this.islogginfail=true;
        this.errorMsj=err.error.mensaje;
        console.log(this.errorMsj);
        
      })
    }
}
