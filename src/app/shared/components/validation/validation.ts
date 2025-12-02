import { Component, input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'validation',
  imports: [],
  templateUrl: './validation.html',
  styleUrl: './validation.scss',
})
export class Validation {
  control = input.required<AbstractControl>();
  name = input.required<string>();
  id = input.required<string>();
}
