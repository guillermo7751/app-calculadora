import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  
  resultado:Number = 0;
  
  dameResultado(suma:Number){
    this.resultado = suma;
  }
}
