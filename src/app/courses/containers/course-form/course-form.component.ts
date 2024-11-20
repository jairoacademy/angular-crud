import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from '../../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    category: ['', [Validators.required]]
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly service: CoursesService,
    private readonly snackBar: MatSnackBar,
    private readonly location: Location
  ) {
    //this.form =
  }

  ngOnInit(): void {
      //this.form.value.
  }


  onSubmit() {
    if (this.form.valid) {
      this.service.save({
        name: this.form.value.name || '',
        category: this.form.value.category || ''
      })
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
