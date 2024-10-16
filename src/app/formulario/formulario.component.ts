import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  @Output() sumarNumeros = new EventEmitter<number>();

  operandoA:number;
  operandoB:number;
  suma:number;

  sumar(){
    this.suma = this.operandoA + this.operandoB;
    this.sumarNumeros.emit(this.suma);
  }
}
