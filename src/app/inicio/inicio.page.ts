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

icono:"person-add-outline",
nombre:"Registro",
direccion :"/registro-de-usuario",
},
{

icono:"wallet-outline",
nombre:"Egresos",
direccion :"/egresos-ususario",
},
];

  constructor() { }

  ngOnInit() {
   
  }

}
