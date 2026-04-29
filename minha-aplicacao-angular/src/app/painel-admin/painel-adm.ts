
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Usuario {
  id: number;
  nome: string;
  email: string;
}

@Component({
  selector: 'app-painel-adm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './painel-adm.html',
  styleUrls: ['./painel-adm.css']
})
export class PainelAdm {
  usuarios: Usuario[] = [
    { id: 1, nome: 'Alice', email: 'alice@example.com' },
    { id: 2, nome: 'Bob', email: 'bob@example.com' },
    { id: 3, nome: 'Charlie', email: 'charlie@example.com' }
  ];
}
          