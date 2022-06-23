import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre = "Yeison";
  nombre2 = "yEisOn yeLa gOnzAleZ";
  arreglo = [1,2,3,4,5,6,7,9,10];
  PI: number =  Math.PI;
  porcentaje: number = 0.524;
  salario: number = 6767.5;
  fecha: Date = new Date();
  activar: boolean = true;

  idioma: string = 'fr';
  videoUrl: string = 'https://www.youtube.com/embed/4xSj9jUEJFY';
  
  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('LLego la data');
    }, 4500);
  });

  heroe = {
    nombre: 'Yeison',
    clave: 'wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 15
    }
  }

}
