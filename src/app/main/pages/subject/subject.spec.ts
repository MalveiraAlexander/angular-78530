import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subject } from './subject';

describe('Subject', () => {
  let component: Subject;
  let fixture: ComponentFixture<Subject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
