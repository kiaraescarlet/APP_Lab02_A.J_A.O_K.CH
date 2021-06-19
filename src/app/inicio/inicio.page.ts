import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
public btn_Registro;
  constructor() { }

  ngOnInit() {
    this.btn_Registro = "  REGISTRO " 
  }

}
