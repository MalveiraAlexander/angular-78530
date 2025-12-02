import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, inject, input, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-two',
  imports: [],
  templateUrl: './page-two.html',
  styleUrl: './page-two.scss',
})
export class PageTwo /*implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy*/ { //Solo para versiones antiguas
  
  title = signal<string>('');
  lastName = input<string>();
  name = input<string>();
  firstName = input<string>();
  private activatedRoute = inject(ActivatedRoute);

  //constructor(private activatedRouteOld: ActivatedRoute) {} //Asi se hacia en versiones antiguas

  constructor() {
    console.log('Constructor');
    
  }
  
  ngOnInit(): void {
    console.log('ngOnInit');
    
    this.activatedRoute.title.subscribe((text) => {
      this.title.set(text!);      
    });

    // this.activatedRoute.queryParams.subscribe((data) => {
    //   console.log(data['lastName']);      
    // });

    // this.activatedRoute.params.subscribe((data) => {
    //   console.log(data['name'])
    // });

    // this.activatedRoute.data.subscribe((data) => {
    //   console.log(data)
    // });
  }

  ngOnChange() {
    console.log('ngOnChange');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  
  
}
