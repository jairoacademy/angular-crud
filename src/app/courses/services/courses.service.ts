import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  private readonly API = '/api/courses';

  constructor(private readonly httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      tap(courses => console.log(courses))
    );
  }

  save(record: Course) {
    console.log('will save:', record);
    return this.httpClient.post<Course>(this.API, record).pipe(first()); // this return an observable
  }

}
