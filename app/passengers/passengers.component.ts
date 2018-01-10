import { Component } from '@angular/core';
import { Passenger } from '../service/passenger.service';

@Component({
  selector: 'app-passengers',
  styleUrls: ['passengers.component.scss'],
  template: `
  <div class="app">
    <h3>Airline Passengers</h3>
    <ul>
      <ng-template ngFor let-passenger [ngForOf]="passengers">
        <li>
          <span class="status"
            [class.checked-in]="passenger.checkedIn">
          </span>
          {{ passenger.fullname }}
        </li>
      </ng-template>
    </ul>
    <h3>Airline Passengers</h3>
    <ul>
      <li *ngFor="let passenger of passengers">
        <span class="status"
          [class.checked-in]="passenger.checkedIn">
        </span>
        {{ passenger.fullname }} - {{ passenger.checkInDate | date:'d MMMM y' | lowercase }}
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
      checkedIn: true,
      checkInDate: 123456789000
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: 123456789000
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 123456789000
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 123456789000
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: 123456789000
    }
  ];
}
