import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AlertComponent } from '@coreui/angular';
import { FormularioComponent } from '../formulario/formulario.component';
import { Routes } from '@angular/router';
import { FormCheckComponent } from '@coreui/angular';

const routes: Routes = [
  { path: '', component: FormularioComponent },
  { path: 'nueva-cotizacion', component: FormularioComponent }
];



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatCardModule,AlertComponent,FormCheckComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  router: any;
  navegarACotizacion(event: Event) {
    event.preventDefault();
    alert('Serás redirigido al formulario de cotización.');
    this.router.navigate(['/formulario']); // Redirige a la ruta configurada
  }
}