import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsServiceService } from 'src/service/skills-service.service';

@Component({
  selector: 'app-new-hy-s',
  templateUrl: './new-hy-s.component.html',
  styleUrls: ['./new-hy-s.component.css']
})
export class NewHySComponent implements OnInit {
  nombreS:string;
  imageS:string;
  porcentajeS:number;

  constructor(private skillservice:SkillsServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const skills= new Skills(this.nombreS, this.imageS,this.porcentajeS);
    this.skillservice.save(skills).subscribe(
      data=>{
        alert("Skill añadida correctamente");
        this.router.navigate(['']);
      },err=>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }
}
