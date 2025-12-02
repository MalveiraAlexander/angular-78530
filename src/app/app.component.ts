import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clase1';
  count: number = 0;
  numbers: number[] = [];

  constructor() {
    setTimeout(() => {
      this.title = 'Clase1-';
    }, 2500);
  }

  onCount() {        
    this.count++;
    this.numbers = [...this.numbers, this.count];    
  }
}
