import { Injectable } from '@angular/core';
import{HttpClient}from "@angular/common/http"
import{environment} from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  backend = environment.backend+"/usuario/obtener-usuarios"; 



  constructor(private http:HttpClient) { }

registrarformulario(Registro_de_Usuario){
return this.http.post('${this.backend)/usuario/crear-usuarios',Registro_de_Usuario);

}

}
