import { Component } from '@angular/core';
import { Layout } from '../layout/layout';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [
    Layout,
    RouterOutlet
  ],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

}
