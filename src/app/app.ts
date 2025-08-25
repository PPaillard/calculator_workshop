import { Component, signal } from '@angular/core';
import { Calculator } from './calculator/calculator';

@Component({
  selector: 'app-root',
  imports: [Calculator],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('atelierCalculator');
}
