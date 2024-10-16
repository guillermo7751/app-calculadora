import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  @Output() sumarNumeros = new EventEmitter<Number>();

  operandoA:number = 0;
  operandoB:number = 0;
  suma:number = 0;

  sumar(){
    this.suma = this.operandoA + this.operandoB;
    this.sumarNumeros.emit(this.suma);
  }
}
