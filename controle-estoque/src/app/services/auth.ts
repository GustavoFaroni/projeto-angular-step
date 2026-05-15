import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  estaLogado(): boolean {
    return !!localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('cargo');
  }

  temRole(roleNecessaria: string): boolean {
    return this.getRole() === roleNecessaria;
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
  login(usuario: any) {
    return this.http.post(`${this.apiUrl}/login`, usuario, { headers: this.headers });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  saveCargo(cargo: string) {
    localStorage.setItem('cargo', cargo);
  }

  // essa funcao nesse serviço serve para pegar os dados do usuario logado na API (back end) e verificar se ele está logado ou não.
  me(token: string) {
    const headers = this.headers.set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/me`, { token }, { headers });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('cargo');
  }
}