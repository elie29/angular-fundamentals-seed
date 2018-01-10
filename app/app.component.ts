import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1>{{name}}</h1>
      <button type="button" (click)="handleButton(username.value)">Get Value</button>
      <input type="text" [value]="name" #username/>
    </div>
  `
})
export class AppComponent {
  name: string = 'Hello World!';
  handleButton(value: string): void {
    this.name = value.trim() || this.name;
  }
}
