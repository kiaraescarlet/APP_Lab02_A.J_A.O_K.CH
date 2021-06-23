import { Component, OnInit } from '@angular/core';



import {RegistrosService} from "../components/servicios/registros.service";
import { EgresosUsusarioPageModule} from './egresos-ususario.module';


export class EgresosDeUsuario{
  constructor(
    
    public descripcion,
    public precio,
    public id,

  ){}
}

@Component({
  selector: 'app-egresos-ususario',
  templateUrl: './egresos-ususario.page.html',
  styleUrls: ['./egresos-ususario.page.scss'],
})
export class EgresosUsusarioPage implements OnInit {

  egresos_usuario;
  constructor( private registrosService:RegistrosService) { 

    this.egresos_usuario = new EgresosDeUsuario(  "","","" )



  }

  ngOnInit() {
  }
  datos(){
    this.registrosService.registarEgreso(this.egresos_usuario).subscribe(
      (Response:any)=>{
  
  
         if(Response.Registro){
          alert("Egreso enviado con exito");
         
       }  else{
            alert("Error al enviar  ")
          }
  
      },
      error=>{
        alert("Error en la peticion")
      }

    )


      console.log("Los datos del Egresos son :", this.egresos_usuario )
}

}