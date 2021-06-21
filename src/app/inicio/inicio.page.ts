import { Component, OnInit } from '@angular/core';

   
interface componente{
  icono:string,
  nombre :string,
  direccion: string
  }
  
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes:componente [] = [ 
    {
    
    icono:"grid",
    nombre:"Menú",
    direccion :"/menu",
    },
  ];





  constructor() { }

  ngOnInit() {
   
  }

}
