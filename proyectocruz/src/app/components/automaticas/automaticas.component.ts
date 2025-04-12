import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-automaticas',
  imports: [CommonModule,FormsModule],
  templateUrl: './automaticas.component.html',
  styleUrl: './automaticas.component.scss'
})
export class AutomaticasComponent {
  productos = [
    { id: 1, nombre: 'Producto 1', seleccionado: true },
    { id: 2, nombre: 'Producto 2', seleccionado: true },
    { id: 3, nombre: 'Producto 3', seleccionado: false },
    { id: 4, nombre: 'Producto 4', seleccionado: false },
  ];

  etiquetas: any[] = [];

  agregarEtiquetas() {
    this.etiquetas = this.productos
      .filter((producto) => producto.seleccionado)
      .map(() => ({
        ean: '111111111111',
        sku: '111111111111',
        tipo: 'J',
        cantidad: 10000,
        conPrecio: false,
      }));
  }
}
