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
Persona:persona=null
  constructor(private activatedRouter:ActivatedRoute,private servicePersona:PersonaService, private router:Router) { }

  ngOnInit(): void {
    this.activatedRouter.snapshot.params['id'];
    this.servicePersona.getPersona().subscribe(
      data =>{
        this.Persona= data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
 
  }
  onUpdate():void{
<<<<<<< Updated upstream
   const id = this.activatedRouter.snapshot.params['id'];
    this.servicePersona.editar(id ,this.persona).subscribe(
=======
    this.activatedRouter.snapshot.params['Persona'];
    this.servicePersona.save( this.Persona).subscribe(
>>>>>>> Stashed changes
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }
}

