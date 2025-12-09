import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Search {
  query = signal<string | undefined>(undefined);
}
