import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  
  resultado:number;
  
  dameResultado(suma:number){
    this.resultado = suma;
  }
}
