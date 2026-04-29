import { Component, signal } from '@angular/core';
import { Aula2 } from './aula2/aula2';
@Component({
  selector: 'app-root',
  imports: [Aula2],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('minha-aplicacao-angular');
}
          