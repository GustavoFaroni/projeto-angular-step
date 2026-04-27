import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PainelAdmin } from './pages/painel-admin/painel-admin';
import { Dashboard } from './pages/dashboard/dashboard';
import { Estoque } from './estoque/estoque';
import { Login } from './pages/login/login';
import { Register } from './register/register';

@NgModule({
  declarations: [App, PainelAdmin, Dashboard, Estoque, Login, Register],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
