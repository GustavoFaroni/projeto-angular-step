import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { PainelAdmin } from './painel-admin/painel-admin';
import { Estoque } from './estoque/estoque';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: Login},
  {path: 'dashboard', component: Dashboard},
  {path: 'painel-admin', component: PainelAdmin},
  {path: 'estoque', component: Estoque}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
