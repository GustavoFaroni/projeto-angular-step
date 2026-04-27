import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  temRole(roleNecessaria: any) {
    throw new Error('Method not implemented.');
  }
  estaLogado() {
    throw new Error('Method not implemented.');
  }
  apiUrl = 'https://projeto-node-step-git-main-fabios-projects-d2648344.vercel.app/api/auth';
  apiKey = 'Step@2025';
  headers = new HttpHeaders({
    'x-api-key': this.apiKey,
  });

  constructor(private http: HttpClient) {}

  // esse funcao nesse serviço serve para cadastrar um novo usuario na API (back end). O angular envia pra ela
  registrar(usuario: any) {
    return this.http.post(`${this.apiUrl}/register`, usuario, { headers: this.headers });
  }

  // essa funcao nesse serviço serve para logar um usuario na API (back end).
  login(usuario: any, p0: string) {
    return this.http.post(`${this.apiUrl}/login`, usuario, { headers: this.headers });
  }

  // essa funcao nesse serviço serve para pegar os dados do usuario logado na API (back end) e verificar se ele está logado ou não.
  me(token: any) {
    console.log('Verificando token:', token);
    return this.http.post(`${this.apiUrl}/me`, token, { headers: this.headers });
  }
}