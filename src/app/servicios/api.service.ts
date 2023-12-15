import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { } 

  urlApi = ///*"aqui va de los metodos sacados del postman, por ejemplo el get"/*

  obtenerAlumno(){


  }

  crearAlumno();{


  }

  eliminarAlumno();{


  }

  modificarAlumno();{


  }

}

function obtenerAlumno(): void {
  throw new Error('Function not implemented.');
}


function crearAlumno() {
  throw new Error('Function not implemented.');
}


function eliminarAlumno() {
  throw new Error('Function not implemented.');
}


function modificarAlumno() {
  throw new Error('Function not implemented.');
}
