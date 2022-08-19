import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectoServiceService } from 'src/service/proyecto-service.service';
import { TokenService } from 'src/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
 proyecto: Proyectos[]=[]
  constructor( private sproyectos:ProyectoServiceService ,private tokenService:TokenService) { }

  isLogged=false;

    ngOnInit(): void {
      this.cargarProyecto();
      if(this.tokenService.getToken()){
        this.isLogged=true;
      }else{
        this.isLogged=false;
      }
    }
    
    cargarProyecto():void{
      this.sproyectos.lista().subscribe(
        data=>{
          this.proyecto=data;
        }
      )
    }
    delete(id?:number){
      if(id!=undefined){
        this.sproyectos.delete(id).subscribe(
          data=>{
            this.cargarProyecto();
          },err=>{
             alert("no se pudo borrar el proyecto");
            }
        )
      }
    }
  }

