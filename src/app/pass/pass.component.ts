import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pass',
  template: `
    <ul>
      <div *ngFor="let student of students">
        <ng-container *ngIf="student.mark >= 50">
          {{ student.name }} - {{ student.mark }}
        </ng-container>
</div>
    </ul>
  `
})
export class PassComponent {
  @Input() students: { name: string; mark: number }[] = [];
}
