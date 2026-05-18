import { Component } from '@angular/core';
import { Register } from '../../register/register';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-painel-admin',
  standalone: true,
  templateUrl: './painel-admin.html',
  styleUrl: './painel-admin.css',
  imports: [Register, RouterLink, MatCardModule, MatButtonModule, MatIconModule],
})
export class PainelAdmin {
  constructor() {}
}
 