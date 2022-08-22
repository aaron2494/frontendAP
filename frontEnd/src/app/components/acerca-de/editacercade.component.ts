import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/service/persona.service';
import { AcercaDeComponent } from './acerca-de.component';

@Component({
  selector: 'app-editacercade',
  templateUrl: './editacercade.component.html',
  styleUrls: ['./editacercade.component.css']
})
export class EditacercadeComponent implements OnInit {
persona:persona=null
  constructor(private activatedRouter:ActivatedRoute,private servicePersona:PersonaService, private router:Router) { }

  ngOnInit(): void {
    this.activatedRouter.snapshot.params['id'];
    this.servicePersona.getPersona().subscribe(
      data =>{
        this.persona= data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
 
  }
  onUpdate():void{
   const id = this.activatedRouter.snapshot.params['id'];
    this.servicePersona.editar(id ,this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }
}
