import { Component, OnInit } from '@angular/core';


export class RegistroDeUsuario{
  constructor(
    public nombre,
    public run,
    public correo,
    public clave,

  ){}

}

@Component({
  selector: 'app-registro-de-usuario',
  templateUrl: './registro-de-usuario.page.html',
  styleUrls: ['./registro-de-usuario.page.scss'],
})
export class RegistroDeUsuarioPage implements OnInit {

  registro_de_usuario;
  constructor() { 
    this.registro_de_usuario = new RegistroDeUsuario ( "nombre" , "run" , "correo", "clave" )

  }

  ngOnInit() {
  
  }
datos(){
console.log("Los datos del registro son:", this.registro_de_usuario )

}


}
