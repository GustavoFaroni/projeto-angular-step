import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private usuario: any = null;
  private readonly registerUrl = 'https://projeto-node-step-git-main-fabios-projects-d2648344.vercel.app/api/auth/register';

  constructor(private http: HttpClient) {}

  login(username: string, role: string){
    this.usuario = {username, role};
  }

  logout(){
    this.usuario = null;
  }

  estaLogado(): boolean {
    return !!this.usuario;
  }

  temRole(role: string): boolean {
    return this.usuario?.role === role;
  }

  register(data: { nome: string; email: string; cargo: string; password: string }) {
    return this.http.post<any>(this.registerUrl, data);
  }
}
