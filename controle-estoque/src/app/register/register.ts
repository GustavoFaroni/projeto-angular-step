import { Component } from '@angular/core';
import { Auth } from '../services/auth';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
})
export class Register {
  message = '';
  error = '';
  isSubmitting = false;

  constructor(private auth: Auth) {}

  registerForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    cargo: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  register() {
    if (this.registerForm.invalid) {
      this.error = 'Por favor, preencha todos os campos corretamente.';
      return;
    }

    this.error = '';
    this.message = '';
    this.isSubmitting = true;

    this.auth.registrar(this.registerForm.value).subscribe({
      next: () => {
        this.message = 'Usuário cadastrado com sucesso!';
        this.isSubmitting = false;
        this.registerForm.reset({ cargo: '' });
      },
      error: (err: any) => {
        this.error = err?.error?.message || 'Erro ao registrar. Tente novamente.';
        this.isSubmitting = false;
      },
    });
  }
}
