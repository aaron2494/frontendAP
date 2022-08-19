import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from 'src/app/model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL=" https://backendapr.herokuapp.com/personas/";
  
  constructor(private http:HttpClient) { }

  public getPersona(): Observable<persona>{
     return this.http.get<persona>(this.URL+ 'traer/perfil');
  }
  public lista(): Observable<persona[]>{
    return this.http.get<persona[]>(this.URL + 'lista');
  }
  public borrar(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
  public editar(id: number, Persona:persona): Observable<any>{
    return this.http.put<any>(this.URL + `edit/${id}`, Persona);
  }
  
}