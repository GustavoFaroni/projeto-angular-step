import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { PainelAdmin } from './pages/painel-admin/painel-admin';
import { RoleGuard } from './guardioes/role-guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard, canActivate: [RoleGuard] },
  { path: 'painel-adm', component: PainelAdmin, canActivate: [RoleGuard] },
];
