import { Component } from '@angular/core';
import { Register } from '../../register/register';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-painel-admin',
  standalone: true,
  templateUrl: './painel-admin.html',
  styleUrl: './painel-admin.css',
  imports: [Register, RouterLink],
})
export class PainelAdmin {
  constructor() {}
}
 