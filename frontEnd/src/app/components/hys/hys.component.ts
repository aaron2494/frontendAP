import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsServiceService } from 'src/service/skills-service.service';
import { TokenService } from 'src/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skills:Skills[] =[];

  constructor(private skillService:SkillsServiceService, private tokerService:TokenService) { }

  isLogged=false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokerService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }
  cargarSkills():void{
    this.skillService.lista().subscribe(
      data=>{
        this.skills=data;
      }
    )
  }
  delete(id?:number){
    if(id!=undefined){
      this.skillService.delete(id).subscribe(
        data=>{
          this.cargarSkills();
        },err=>{
           alert("no se pudo borrar la skill");
          }
      )
    }
  }
}