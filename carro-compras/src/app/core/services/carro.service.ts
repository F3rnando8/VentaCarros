import { Injectable } from '@angular/core';
import { Carro } from '../modelo/carro';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  private listCarro: Carro[] = [];
  cantidad: any;

  getCarro(): Carro[] {
    this.obtenerSession();
    return this.listCarro;
  }

  agregar(producto: Producto, cantidad: number = 1): void {
    this.obtenerSession();
    const index = this.listCarro.findIndex(item => item.producto.id === producto.id);

    if (index === -1) {
      const item = new Carro(producto, cantidad);
      this.listCarro.push(item);
    } else {
      this.actualizar(index, this.listCarro[index].cantidad + cantidad);
    }
    this.guardarSession();
  }

  actualizar(index: number, cantidad: number): void {
    if (index >= 0 && index < this.listCarro.length) {
      this.listCarro[index].cantidad = cantidad;
      this.guardarSession();
    }
  }

  total() {
    const total = this.listCarro.reduce((sum, item) => {
      return sum + item.producto.precio * item.cantidad;
    }, 0);
    this.guardarSession();
    return total;
  }
  eliminar(index:number){
    if (index >= 0 && index < this.listCarro.length) {
      this.listCarro.splice(index, 1);
      this.guardarSession();
    }
  }
  guardarSession(){
    localStorage.setItem('carro',JSON.stringify(this.listCarro));
  }
  obtenerSession(){
    this.listCarro = []

    if(typeof window != 'undefined' && window.localStorage){
      const carro = localStorage.getItem('carro');
      if(carro != null){
        this.listCarro = JSON.parse(carro);
      }
    }
  }
}