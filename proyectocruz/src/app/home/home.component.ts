import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { ReglasComponent } from '../components/reglas/reglas.component';
import { AutomaticasComponent } from '../components/automaticas/automaticas.component';
import { ManualesComponent } from '../components/manuales/manuales.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,ReglasComponent,AutomaticasComponent,ManualesComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedSection: string = 'reglas';

  onSectionChange(section: string) {
    this.selectedSection = section;
  }
}
