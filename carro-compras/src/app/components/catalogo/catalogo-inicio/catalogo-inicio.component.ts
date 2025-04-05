import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../../core/services/producto.service';
import { Producto } from '../../../core/modelo/producto';
import { CarroService } from '../../../core/services/carro.service';

@Component({
  selector: 'app-catalogo-inicio',
  standalone: true,
  imports: [],
  templateUrl: './catalogo-inicio.component.html',
  styleUrl: './catalogo-inicio.component.css'
})
  
export class CatalogoInicioComponent implements OnInit{
  private productoService = inject(ProductoService);
  private carroService= inject(CarroService);
  productos: Producto[] = [];

  ngOnInit(): void {
    this.getProductos();
  }
  
  getProductos() {
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        console.log(this.productos);
      },
      error: (e) => {
        console.error(e);
      }
    });
  }
  agregarProducto(item: Producto){
    this.carroService.agregar(item);
  }
}

