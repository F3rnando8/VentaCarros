import { Component, inject, OnInit } from '@angular/core';
import { CarroService } from '../../../core/services/carro.service';
import { Carro } from '../../../core/modelo/carro';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carro-listar',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './carro-listar.component.html',
  styleUrl: './carro-listar.component.css'
})
export class CarroListarComponent implements OnInit {
    public carroService= inject(CarroService);
    listCarro: Carro[] = [];

    ngOnInit(): void {
        this.getlistCarro();
        
    }
    getlistCarro(){ 
        this.listCarro = this.carroService.getCarro();
    }
    eliminarItem(index: number){
        this.carroService.eliminar(index);
        this.getlistCarro();
    }

}