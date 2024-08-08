import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatButtonModule,MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  providers: [HttpClient],
})


export class FormularioComponent {
customStylesValidated: any;
onSubmit1() {
throw new Error('Method not implemented.');
}


}
