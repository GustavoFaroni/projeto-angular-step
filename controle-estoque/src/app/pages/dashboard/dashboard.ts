import { Component, OnInit, signal } from '@angular/core';
import { Produto, ProdutosService } from '../../services/produtos.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Auth } from '../../services/auth';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  imports: [CommonModule, MatCardModule, MatButtonModule, CurrencyPipe, RouterLink],
})
export class Dashboard implements OnInit {
  produtos = signal<Produto[]>([]);
  isLoading = signal<boolean>(true);

  constructor(
    private produtosService: ProdutosService,
    public auth: Auth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produtosService.getProdutos().subscribe({
      next: (data) => {
        this.produtos.set(data);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      }
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
