import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectoServiceService } from 'src/service/proyecto-service.service';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css']
})
export class NewProyectComponent implements OnInit {
  nombreP:string;
  descripcionP:string;
  imageP:string;
  constructor(private sproyectos:ProyectoServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const proyectos= new Proyectos(this.nombreP, this.imageP,this.descripcionP);
    this.sproyectos.save(proyectos).subscribe(
      data=>{
        alert("proyecto añadido correctamente");
        this.router.navigate(['']);
      },err=>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }
}
