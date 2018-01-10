import { Component } from '@angular/core';
import { Passenger } from '../service/passenger.service';

@Component({
  selector: 'app-passengers',
  template: `
  <div class="app">
    <h3>Airline Passengers</h3>
    <ul>
      <ng-template ngFor let-passenger [ngForOf]="passengers">
        <li>
          {{passenger.fullname}}
        </li>
      </ng-template>
    </ul>
    <h3>Airline Passengers</h3>
    <ul>
      <li *ngFor="let passenger of passengers">
        {{passenger.fullname}}
      </li>
    </ul>
  </div>
  `
})
export class PassengersComponent {
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false
    }
  ];
}
