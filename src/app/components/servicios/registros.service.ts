import { Injectable } from '@angular/core';
import { RegistroDeUsuario } from '../../registro-de-usuario/registro-de-usuario.page';
import{HttpClient}from '@angular/common/http';
import{environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  backend = environment.backend+"/registroForm"; 

  backEnd = environment.backend+"/egreso/crear-egreso";
  
  constructor(private http:HttpClient) { }  

registrarformulario(datos_formulario){
return this.http.post(`${this.backend}/crear-registro`,datos_formulario);

}

obtenerDatosFormulario(){
  return this.http.get(`${this.backend}/obtener-registros`)
}

registarEgreso (egresos_usuario){

return this.http.post('${this.backEnd}/egreso/crear-egreso',egresos_usuario);


}

}
