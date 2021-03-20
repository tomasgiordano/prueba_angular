import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-edades',
  templateUrl: './calculadora-edades.component.html',
  styleUrls: ['./calculadora-edades.component.css']
})
export class CalculadoraEdadesComponent {
  
  title = 'routing-app';
  edad1: number = 0;
  edad2: number = 0;
  suma: number = 0;
  promedio: number = 0;

  SumarEdades()
  {
    this.suma = this.edad1+this.edad2;
  }

  PromediarEdades()
  {
    this.promedio = this.suma/2;
  }

  Calcular()
  {
    this.SumarEdades();
    this.PromediarEdades();
  }

  Limpiar()
  {
    this.edad1 = 0;
    this.edad2 = 0;
    this.suma = 0;
    this.promedio = 0;
  }  
}
