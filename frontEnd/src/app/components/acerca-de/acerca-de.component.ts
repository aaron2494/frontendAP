import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/service/persona.service';
import { TokenService } from 'src/service/token.service';
import { Storage,ref,uploadBytes,listAll,getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  Persona: persona[]=[];
  images:string[]=[];

  constructor(public personaService:PersonaService ,private tokenService:TokenService, private sotrage:Storage) { 
    this.images=[];
  }
  isLogged=false;
    ngOnInit(): void {
      this.cargarPersona();
      if(this.tokenService.getToken()){
        this.isLogged=true;
      }else{
        this.isLogged=false;
      }
      this.getImages();
    }
    cargarPersona():void{
      this.personaService.lista().subscribe(
        data=>{
          this.Persona=data;
        }
      )
    }
   
    uploadImage($event:any){
      const file=$event.target.files[0]
      console.log(file);

      const imgRef=ref(this.sotrage,`images/${file.name}`)

      uploadBytes(imgRef,file)
      .then(Response=>{
        console.log(Response)
      this.getImages()
      })
      .catch(error=>console.log(error));
    }
   
    getImages(){
      const imageRef=ref(this.sotrage,'images');
      
      listAll(imageRef)
      .then(async Response=>{
      console.log(Response);
      this.images=[];

      for(let item of Response.items){
      const url= await getDownloadURL(item);
      this.images.push(url);
     }
    })
    .catch(error=>console.log(error))
    }
    
 
}
