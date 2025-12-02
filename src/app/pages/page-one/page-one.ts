import { Component, effect, signal } from '@angular/core';
import { Prueba } from "../../components/prueba/prueba";

@Component({
  selector: 'app-page-one',
  imports: [Prueba],
  templateUrl: './page-one.html',
  styleUrl: './page-one.scss',
})
export class PageOne {
  protected readonly title = signal('Clase1');
  count = signal<number>(0);
  numbers = signal<number[]>([]);

  constructor() {
    setTimeout(() => {
      this.title.set('Clase1-');
    }, 2500);
    this.test()
  }

  test() {
    effect(() => {
      console.log('Titulo: ', this.title());
    })
  }

  onCount() {
        
    this.count.set(this.count() + 1);
    this.numbers.set([...this.numbers(), this.count()]);
    
  }
}
