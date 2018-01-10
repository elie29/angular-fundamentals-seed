import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1>{{name}}</h1>
      <button type="button" (click)="handleButton(username.value)">Get Value</button>
      <input type="text" [value]="name" #username/>
      <hr />
      <input type="text" [value]="name" (input)="handleButton($event.target.value)"/>
      <ng-template [ngIf]="name.length > 2">
        <div>Seach for... {{name}}</div>
      </ng-template>
      <div *ngIf="name.length > 2">
        Seach for... {{name}}
      </div>
    </div>
  `
})
export class AppComponent {
  name: string = '';
  handleButton(value: string): void {
    this.name = value;
  }
}
