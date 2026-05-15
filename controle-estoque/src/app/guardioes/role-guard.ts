import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Auth } from '../services/auth';
import { map, catchError, of, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(
    private auth: Auth,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    return this.auth.me(token).pipe(
      map((user: any) => {
        // Se a rota for o painel-adm, verifica se é administrador
        if (state.url.includes('painel-adm')) {
          if (user.cargo === 'administrador') {
            return true;
          } else {
            alert('Acesso restrito a administradores!');
            this.router.navigate(['/dashboard']);
            return false;
          }
        }
        return true;
      }),
      catchError(() => {
        this.auth.logout();
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
