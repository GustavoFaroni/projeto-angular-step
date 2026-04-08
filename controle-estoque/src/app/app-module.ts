import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PainelAdmin } from './painel-admin/painel-admin';
import { Dashboard } from './dashboard/dashboard';
import { Estoque } from './estoque/estoque';
import { Login } from './login/login';
import { Register } from './register/register';

@NgModule({
  declarations: [App, PainelAdmin, Dashboard, Estoque, Login, Register],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
