import { Component, OnInit } from '@angular/core';
import {RegistrosService } from '../components/servicios/registros.service';

@Component({
  selector: 'app-listadeusuarios',
  templateUrl: './listadeusuarios.page.html',
  styleUrls: ['./listadeusuarios.page.scss'],
})
export class ListadeusuariosPage implements OnInit {

  constructor(private registrosService:RegistrosService) { }
  datos_formularios;
  ngOnInit() {
  }
 ionViewWillEnter(){
   this.obtenerDatosFormularios();
 }
 obtenerDatosFormularios(){
   this.registrosService.obtenerDatosFormulario().subscribe(
    (response:any) => {
      this.datos_formularios = response.registros;
    },
    error => {
      alert("hay errores"); 
    }
    
   );
 }
}
