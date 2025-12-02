import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Validation } from '../shared/components/validation/validation';
import { AddOrEditStudent } from '../main/pages/student/add-or-edit-student/add-or-edit-student';
import { StudentService } from '../main/services/student/student';



@NgModule({
  declarations: [
    // AddOrEditStudent
  ],
  imports: [
    RouterLink,
    ReactiveFormsModule,
    Validation
  ],
  providers: [StudentService]
})
export class AppTestModule { }
