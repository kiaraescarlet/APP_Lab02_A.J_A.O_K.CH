import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EgresosUsusarioPageRoutingModule } from './egresos-ususario-routing.module';

import { EgresosUsusarioPage } from './egresos-ususario.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EgresosUsusarioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EgresosUsusarioPage]
})
export class EgresosUsusarioPageModule {}
