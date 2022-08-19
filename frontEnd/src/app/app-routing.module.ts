import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditacercadeComponent } from './components/acerca-de/editacercade.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditwHySComponent } from './components/hys/editw-hy-s.component';
import { NewHySComponent } from './components/hys/new-hy-s.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectComponent } from './components/proyectos/edit-proyect.component';
import { NewProyectComponent } from './components/proyectos/new-proyect.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevaexp',component:NewExperienciaComponent},
  {path:'editexp/:id',component:EditExperienciaComponent},
  {path:'nuevaedu',component:NewEducacionComponent},
  {path:'editedu/:id',component:EditEducacionComponent},
  {path:'nuevaskill',component:NewHySComponent},
  {path:'editskill/:id',component:EditwHySComponent},
  {path:'nuevoproyecto',component:NewProyectComponent},
  {path:'editproyecto/:id',component:EditProyectComponent},
  {path:'editpersona/:id',component:EditacercadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
