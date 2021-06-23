import { Injectable } from '@angular/core';
import { RegistroDeUsuario } from '../../registro-de-usuario/registro-de-usuario.page';
import{HttpClient}from "@angular/common/http"
import{environment} from "../../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  backend = environment.backend+"/usuario"; 

  backEnd = environment.backend+"/egreso";

  constructor(private http:HttpClient) { }

registrarformulario(registro_de_usuario){
return this.http.post("${this.backend}/usuario/crear-usuario",registro_de_usuario);

}

obtenerRegistro(registro_de_usuario){
  return this.http.get('${this.backend}/usuario/crear-usuario',registro_de_usuario);
  
  }

obtenerDatos(id){
  return this.http.get('${this.backend}/usuario/obtener-usuarios');

  
}
registarEgreso (egresos_usuario){

return this.http.post("$ {this.backEnd}/egreso/crear-egreso",egresos_usuario);

}


obtenerEgresos(id){
  return this.http.get('${this.backend}/egreso/crear-egreso');


}


}
