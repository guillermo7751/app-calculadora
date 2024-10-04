import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  operandoA:number = 0;
  operandoB:number = 0;
  suma:number = 0;

  sumar(){
    this.suma = this.operandoA + this.operandoB;
  }
}
