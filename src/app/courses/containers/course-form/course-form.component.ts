import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormArray, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';
import { Lesson } from '../../model/lesson';
import { FormUtilsService } from 'src/app/shared/form/form-utils.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form!: FormGroup;

  title: string = '';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly service: CoursesService,
    private readonly snackBar: MatSnackBar,
    private readonly location: Location,
    private readonly route: ActivatedRoute,
    public formUtils: FormUtilsService
  ) {
    //Do something
  }

  ngOnInit(): void {
    const course:Course = this.route.snapshot.data['course'];
    if (course) {
      this.form = this.formBuilder.group({
        _id: [course._id],
        name: [course.name, [
          Validators.required, Validators.minLength(5),
          Validators.maxLength(100)]],
        category: [course.category, [Validators.required]],
        lessons: this.formBuilder.array(this.retrieveLessons(course), Validators.required)
      });
      this.title = course._id ? 'Edit Course' : 'Create Course';
      console.log(this.form);
      console.log(this.form.value);
    }
  }

  private retrieveLessons(course: Course) {
    const lessons = [];
    if(course?.lessons) {
      course.lessons.forEach(
        lesson => lessons.push(this.createLesson(lesson))
      )
    } else {
      lessons.push(this.createLesson());
    }
    return lessons;
  }

  private createLesson(lesson: Lesson = {id:'', name: '', youtubeUrl: ''}) {
    return this.formBuilder.group({
      id: [lesson.id],
      name: [lesson.name, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      youtubeUrl: [lesson.youtubeUrl, [Validators.required, Validators.minLength(10), Validators.maxLength(11)]]
    })
  }

  getLessonsFormArray() {
    return (<UntypedFormArray>this.form.get('lessons')).controls;
  }

  addNewLesson() {
    const lessons = this.form.get('lessons') as FormArray;
    lessons.push(this.createLesson());
  }

  removeLesson(index: number) {
    const lessons = this.form.get('lessons') as FormArray;
    lessons.removeAt(index);
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.save( this.form.value)
      .subscribe(result => this.onSuccess(), error => this.onError())
    } else {
      this.formUtils.validateAllFormFields(this.form);
    }
  }


  onSuccess() {
    this.snackBar.open('Course saved successfully', '', { duration: 3000 });
    this.onCancel();
  }

  onError() {
    this.snackBar.open('Error saving course', '', { duration: 3000 });
  }

  onCancel() {
    this.location.back();
  }

}
