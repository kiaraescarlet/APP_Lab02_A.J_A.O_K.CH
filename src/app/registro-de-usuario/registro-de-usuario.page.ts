import { Component, OnInit } from '@angular/core';
import { RegistroDeUsuarioPageModule } from "./registro-de-usuario.module";

import {RegistrosService } from "../components/servicios/registros.service";

export class RegistroDeUsuario{
  constructor(
    public nombre,
    public apellido,
    public rut,
    public correo,
    public password,

  ){}

}

@Component({
  selector: 'app-registro-de-usuario',
  templateUrl: './registro-de-usuario.page.html',
  styleUrls: ['./registro-de-usuario.page.scss'],
})
export class RegistroDeUsuarioPage implements OnInit {

  registro_de_usuario;
  constructor( private registrosService:RegistrosService)  { 
    this.registro_de_usuario = new RegistroDeUsuario ( "","","","","" )

  }
  ngOnInit() {
  }
datos(){
  this.registrosService.registrarformulario(this.registro_de_usuario).subscribe(
    (Response:any)=>{

      if(Response.Registro){
        alert("Los datos fueron enviado con exito");
       
     }  else{
          alert("Error al enviar los datos ")
        }

    },
    error=>{
      alert("Error en la peticion")
    }

 )

console.log("Los datos del registro son:", this.registro_de_usuario )


}


}
