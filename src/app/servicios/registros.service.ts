import { Injectable } from '@angular/core';
import{HttpClient}from "@angular/common/http"
import{environment} from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  backend = environment.backend+"/usuario/crear-usuario"; 



  constructor(private http:HttpClient) { }

registrarformulario(Registro_de_Usuario){
return this.http.post('${this.backend)/usuario/crear-usuario',Registro_de_Usuario);

}

}
