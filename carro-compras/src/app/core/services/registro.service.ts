import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  guardarRegistro(datos: any) {

    console.log('Datos del registro:', datos);


  }
}