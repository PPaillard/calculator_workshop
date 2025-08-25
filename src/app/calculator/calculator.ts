import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  randomOne: number = 0;
  randomTwo: number = 0;
  result?: number;

  generateRandom(): number {
    return Math.floor(Math.random() * 1000);
  }

  generateOne(): void {
    this.randomOne = this.generateRandom();
  }

  generateTwo(): void {
    this.randomTwo = this.generateRandom();
  }

  sum(): void {
    this.result = this.randomOne + this.randomTwo;
  }
}
