import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from "../Modelo/Persona";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  constructor(private http:HttpClient) { }
  //host de backend, la barra '/' sola es el home//host de backend, la barra '/' sola es el home
  //private Url:string="https://keys-app-mobydigital.herokuapp.com/api";
  private Url:string="http://localhost:8081/api";

  getPersonas():Observable<Persona[]> {
    return this.http.get<Persona[]>(this.Url+"/users"); //obtengo todos los datos de la URL de arriba, que se refiere al backend
    
  }

  createPersona(persona:Persona) {
    return this.http.post<Persona>(this.Url+"/user",persona);
  }

  getPersonaDni(dni:number){
    return this.http.get<Persona>(this.Url+"/user/"+dni);
  }

  updatePersona(persona:Persona){
    return this.http.put(this.Url+"/user/"+persona.dni,persona);
  } //borré el <Persona>, es decir el template, porque eso es "a este objeto lo casteo", casteo es 

  deletePersona(persona:Persona){
    return this.http.delete(this.Url+"/user/"+persona.dni);
  }
}
