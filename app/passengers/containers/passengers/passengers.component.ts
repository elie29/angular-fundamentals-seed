import { Component } from '@angular/core';

import { Passenger } from '../../models/passenger.service';
import { PassengersService } from '../../services/passengers.service';

@Component({
  selector: 'app-passengers',
  styleUrls: ['passengers.component.scss'],
  template: `
  <div class="app">
    <passenger-count></passenger-count>
    <passenger-detail></passenger-detail>
    <h3>Airline Passengers</h3>
    <ul>
      <li *ngFor="let passenger of passengers">
        <span class="status"
          [class.checked-in]="passenger.checkedIn">
        </span>
        {{ passenger.fullname }} - {{ passenger.checkInDate | date:'d MMMM y' | lowercase }}
        <div class="children">
        Children : {{ passenger.children?.length || 0 }}
        </div>
      </li>
    </ul>
  </div>
  `
})
export class PassengersComponent {
  passengers: Passenger[];

  constructor(private service: PassengersService) {
    this.passengers = service.passengers;
  }
}
