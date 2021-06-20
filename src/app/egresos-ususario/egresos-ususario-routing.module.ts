import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EgresosUsusarioPage } from './egresos-ususario.page';

const routes: Routes = [
  {
    path: '',
    component: EgresosUsusarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EgresosUsusarioPageRoutingModule {}
