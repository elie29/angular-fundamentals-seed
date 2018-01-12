import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <passenger-viewer></passenger-viewer>
  `
})
export class AppComponent {
  name = '';
  handleButton(value: string): void {
    this.name = value;
  }
}
