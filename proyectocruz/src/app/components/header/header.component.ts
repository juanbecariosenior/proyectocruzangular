import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() sectionChanged = new EventEmitter<string>();

  seleccionarSeccion(seccion: string){
    this.sectionChanged.emit(seccion)
  }

  selectedIcon: string = '';

  selectIcon(icon: string) {
    this.selectedIcon = icon;
  }
}
