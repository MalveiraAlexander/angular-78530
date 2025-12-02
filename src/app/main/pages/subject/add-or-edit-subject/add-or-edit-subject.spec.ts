import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditSubject } from './add-or-edit-subject';

describe('AddOrEditSubject', () => {
  let component: AddOrEditSubject;
  let fixture: ComponentFixture<AddOrEditSubject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOrEditSubject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrEditSubject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
