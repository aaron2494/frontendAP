import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/service/persona.service';
import { TokenService } from 'src/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  Persona: persona[]=[];

  constructor(public personaService:PersonaService ,private tokenService:TokenService) { }
  isLogged=false;
    ngOnInit(): void {
      this.cargarPersona();
      if(this.tokenService.getToken()){
        this.isLogged=true;
      }else{
        this.isLogged=false;
      }
    }
    cargarPersona():void{
      this.personaService.lista().subscribe(
        data=>{
          this.Persona=data;
        }
      )
    }
    delete(id?:number){
      if(id!=undefined){
        this.personaService.borrar(id).subscribe(
          data=>{
            this.cargarPersona();
          },err=>{
             alert("no se pudo borrar la persona");
            }
        )
      }
    
  }
 
}
