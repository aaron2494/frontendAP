import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsServiceService } from 'src/service/skills-service.service';
import { HysComponent } from './hys.component';

@Component({
  selector: 'app-editw-hy-s',
  templateUrl: './editw-hy-s.component.html',
  styleUrls: ['./editw-hy-s.component.css']
})
export class EditwHySComponent implements OnInit {
    skills :Skills=null;

  constructor(private skillsService:SkillsServiceService, 
              private activatedRouter:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsService.detail(id).subscribe(
      data =>{
        this.skills= data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }
  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsService.update(id, this.skills).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }


}
