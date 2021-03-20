import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { CalculadoraEdadesComponent } from './components/calculadora-edades/calculadora-edades.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    component: LoginComponent,
    path:"login"
  },
  {
    component: CalculadoraEdadesComponent,
    path: "calculadora-edades"
  },
  {
    component: BienvenidoComponent,
    path: "bienvenidos"
  },
  {
    component: ErrorComponent,
    path:"**"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
