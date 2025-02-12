import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fail',
  template: `
    <ul>
      <div *ngFor="let student of students">
        <ng-container *ngIf="student.mark < 50 && student.mark !=0">
          {{ student.name }} - {{ student.mark }}
        </ng-container>
</div>
    </ul>
  `
})
export class FailComponent {
  @Input() students: { name: string; mark: number }[] = [];
}
