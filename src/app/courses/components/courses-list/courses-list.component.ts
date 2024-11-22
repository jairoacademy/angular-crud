import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Course } from '../../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor() {

  }

  ngOnInit(): void {
    //To something
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(course: Course) {
    console.log('on edit:', course);
    this.edit.emit(course);
  }

  onDelete(course: Course): void {
    console.log('courses-list >>> onDelete:', course);
    this.remove.emit(course);
  }

}
