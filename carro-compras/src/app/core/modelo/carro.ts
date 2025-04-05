import { Producto } from './producto';

export class Carro {
  producto: Producto;
  cantidad: number;

  constructor(producto: Producto, cantidad: number = 1) {
    this.producto = producto;
    this.cantidad = cantidad;
  }
}