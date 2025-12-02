import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditStudent } from './add-or-edit-student';

describe('AddOrEditStudent', () => {
  let component: AddOrEditStudent;
  let fixture: ComponentFixture<AddOrEditStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOrEditStudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrEditStudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
