import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: "",
  redirectTo: 'inicio',
  pathMatch: 'full'
},
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
 
  {
    path: 'registro-de-usuario',
    loadChildren: () => import('./registro-de-usuario/registro-de-usuario.module').then( m => m.RegistroDeUsuarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }