import { Component } from '@angular/core';

@Component({
  selector: 'not-fount',
  template: `
    Not found, <a routerLink="/">go home</a> ?
  `
})
export class NotFoundComponent {}
