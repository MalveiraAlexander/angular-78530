import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Validation } from './validation';

describe('Validation', () => {
  let component: Validation;
  let fixture: ComponentFixture<Validation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Validation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Validation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
