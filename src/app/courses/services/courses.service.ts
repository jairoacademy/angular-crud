import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs/operators';

import { Course } from '../model/course';
import { CoursePage } from '../model/course-page';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  private readonly API = '/api/courses/pageable';

  constructor(private readonly httpClient: HttpClient) { }

  list(page = 0, pageSize = 5) {
    return this.httpClient.get<CoursePage>(this.API, { params:{page, pageSize} })
    .pipe(
      first(),
      tap(courses => console.log(courses))
    );
  }

  loadById(id: string) {
    return this.httpClient.get<Course>(`${this.API}/${id}`).pipe(
      first()
    );
  }

  save(record: Partial<Course>) {
    console.log('_id = ', record._id);
    if (record._id) {
      console.log('atualiza');
      return this.httpClient.put<Course>(`${this.API}/${record._id}`, record).pipe(first());
    }
    console.log('novo');
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete<void>(`${this.API}/${id}`).pipe(
      first()
    );
  }

}
