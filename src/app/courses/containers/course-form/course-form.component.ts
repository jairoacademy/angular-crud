import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''], // like a hidden field
    name: ['', [
      Validators.required, Validators.minLength(5),
      Validators.maxLength(100)]],
    category: ['', [Validators.required]]
  });

  title: string = '';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly service: CoursesService,
    private readonly snackBar: MatSnackBar,
    private readonly location: Location,
    private readonly route: ActivatedRoute
  ) {
    //Do something
  }

  ngOnInit(): void {
    const course:Course = this.route.snapshot.data['course'];
    console.log('puts:', course._id);
    if (course) {
      this.form.setValue({
        _id: course._id,
        name: course.name,
        category: course.category
      });
      this.title = course._id ? 'Edit Course' : 'Create Course';
    }
  }

  // Format field name
  private formatFieldName(controlName: string): string {
    return controlName.charAt(0).toUpperCase() + controlName.slice(1);
  }

  getErrorMessage(controlName: string): string {
    const control = this.form.get(controlName);
    if (control?.hasError('required')) {
      return `${this.formatFieldName(controlName)} é obrigatório`;
    }
    if (control?.hasError('minlength')) {
      const minLength = control.getError('minlength').requiredLength;
      return `${this.formatFieldName(controlName)} deve ter pelo menos ${minLength} caracteres`;
    }
    if (control?.hasError('maxlength')) {
      const maxLength = control.getError('maxlength').requiredLength;
      return `${this.formatFieldName(controlName)} não pode ter mais de ${maxLength} caracteres`;
    }
    return 'Campo inválido';
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.save({
        _id: this.form.value._id || '',
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
