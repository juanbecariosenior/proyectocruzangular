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
    { nombre: 'Producto 1', seleccionado: true },
    { nombre: 'Producto 2', seleccionado: true },
    { nombre: 'Producto 3', seleccionado: false },
    { nombre: 'Producto 4', seleccionado: false },
  ];
  
  etiquetas = [
    { ean: '1111111111111', sku: '1111111111111', tipo: 'J', cantidad: 10000, conPrecio: false },
    { ean: '1111111111111', sku: '1111111111111', tipo: 'J', cantidad: 10000, conPrecio: false },
    { ean: '1111111111111', sku: '1111111111111', tipo: 'J', cantidad: 10000, conPrecio: false },
    { ean: '1111111111111', sku: '1111111111111', tipo: 'J', cantidad: 10000, conPrecio: false },
  ];
}
