import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  nome = '';
  email = '';
  cargo = '';
  password = '';
  message = '';
  error = '';
  isSubmitting = false;

  constructor(private auth: Auth, private router: Router) {}

  register() {
    this.error = '';
    this.message = '';

    if (!this.nome || !this.email || !this.cargo || !this.password) {
      this.error = 'Por favor preencha todos os campos.';
      return;
    }

    this.isSubmitting = true;

    this.auth
      .registrar({ nome: this.nome, email: this.email, cargo: this.cargo, password: this.password })
      .subscribe({
        next: () => {
          this.message = 'Cadastro realizado com sucesso. Você pode fazer login agora.';
          this.isSubmitting = false;
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1200);
        },
        error: (err: { error: { message: string; }; }) => {
          this.error = err?.error?.message || 'Erro ao registrar. Tente novamente.';
          this.isSubmitting = false;
        },
      });
  }
}
