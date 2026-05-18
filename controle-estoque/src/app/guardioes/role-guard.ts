import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Auth } from '../services/auth';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(
    private auth: Auth,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.auth.getToken();
    const cargo = this.auth.getRole();

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    // Se a rota for o painel-adm, verifica se é administrador
    if (state.url.includes('painel-adm')) {
      if (cargo === 'administrador') {
        return true;
      } else {
        alert('Acesso restrito a administradores!');
        this.router.navigate(['/dashboard']);
        return false;
      }
    }

    return true;
  }
}
