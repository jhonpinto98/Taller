import { Component } from '@angular/core';
import {MatCardModule} from  '@angular/material/card' ;

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent {

  longText = `Lubricante multigrado superior para motor: ayuda a eliminar los lodos de los motores sucios.
Alta viscosidad para ayudar a reducir fugas en motores más viejos de alto kilometraje
Diseñado para motores de gasolina, diesel y gas, y también adecuado para biodiesel y mezclas de gasolina y etanol`;
  
longText2 = `Aceite de motor de tecnología sintética. Ayuda a proteger frente a la formación de lodos y reduce el desgaste
Shell HelixHX5 15W40 Aceite de motor de tecnología sintética. Ayuda a proteger frente a la formación de lodos y reduce el desgaste`;

longText3 = `Aceite para motor 10W-40 con tecnología sintética.
Limpia y protege para un rendimiento extra.
Es dos veces más eficaz que el aceite normal para eliminar los sedimentos de los motores sucios`
}
