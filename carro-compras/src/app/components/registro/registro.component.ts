import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistroService } from '../../core/services/registro.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  usuario = {
    nombre: '',
    email: '',
    password: ''
  };

  constructor(private registroService: RegistroService) { }

  onSubmit() {
    this.registroService.guardarRegistro(this.usuario);
    alert('REGISTRO EXITOSO'); // Muestra la alerta
    this.usuario = { nombre: '', email: '', password: '' };
  }
}