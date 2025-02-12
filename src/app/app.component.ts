import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'result';
  studentsList = [{ name: "", mark: 0 }];

  addStudent(studentName: string, studentMark: string) {
    const mark = +studentMark;
    this.studentsList.push({
      name: studentName,
      mark: mark
    });
  }
}
