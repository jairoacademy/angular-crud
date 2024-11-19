import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form: UntypedFormGroup;

  constructor(
    private readonly formBuilder: UntypedFormBuilder,
    private readonly service: CoursesService,
    private readonly snackBar: MatSnackBar,
    private readonly location: Location
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      category: ['', [Validators.required]]
    });
  }


  onSubmit() {
    if (this.form.valid) {
      this.service.save(this.form.value)
      .subscribe({
        next: () => this.onSuccess(),
        error: (error) => {
          this.snackBar.open('Error saving course', '', { duration: 3000 });
        }
      });
    }
  }

  onSuccess() {
    this.snackBar.open('Course saved successfully', '', { duration: 3000 });
    this.onCancel();
  }

  onCancel() {
    this.location.back();
  }

}
