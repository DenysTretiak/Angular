import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  coursesObservable: Observable<any[]>;
  courses: any[];

  constructor(private db:AngularFireDatabase) {
        db.list('/books').valueChanges()
            .subscribe(courses =>{
              this.courses = courses;
              console.log(this.courses);
            })
  }

  ngOnInit() {

  }
  // getCourses(listPath): Observable<any[]> {
  //       // return this.db.list(listPath).valueChanges();
  // }

}
