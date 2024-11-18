import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  // final $ identifier the variable is an observable
  courses$: Observable<Course[]>;

  displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private readonly coursesService: CoursesService,
    private readonly dialog: MatDialog,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {

    this.courses$ = this.coursesService.list()
      .pipe(
        catchError(error => {
          this.onError('Error loading courses.');

          return of([]);
        })
      );

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: { message: errorMsg }
    });
  }

  ngOnInit(): void {
    //Do something
  }


  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
