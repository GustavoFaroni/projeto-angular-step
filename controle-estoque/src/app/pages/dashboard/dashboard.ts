import { Component, OnInit, signal } from '@angular/core';
import { Produto, ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  produtos = signal<Produto[]>([]);

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.produtosService.getProdutos().subscribe((data) => {
      this.produtos.set(data);
    });
  }
}
