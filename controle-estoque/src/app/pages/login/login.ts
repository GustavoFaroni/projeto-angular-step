import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
})
export class Login {
  errorMessage: string | undefined;

  constructor(
    private auth: Auth,
    private router: Router,
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login() {
    this.auth.login(this.loginForm.value).subscribe({
      next: (response: any) => {
        this.auth.saveToken(response.token);
        this.auth.saveCargo(response.cargo || 'administrador');
        this.router.navigate(['/dashboard']);
      },
      error: (respostaErro: any) => {
        this.errorMessage = respostaErro.error.error;
      },
    });
  }
}