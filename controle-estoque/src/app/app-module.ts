import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PainelAdmin } from './painel-admin/painel-admin';
import { Dashboard } from './dashboard/dashboard';
import { Estoque } from './estoque/estoque';
import { Login } from './login/login';

@NgModule({
  declarations: [App, PainelAdmin, Dashboard, Estoque, Login],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
