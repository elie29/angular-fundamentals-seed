import { Component } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { PassengersService } from '../../services/passengers.service';

@Component({
  selector: 'app-passengers',
  styleUrls: ['passengers.component.scss'],
  template: `
  <div class="app">
    <div *ngFor="let p of passengers">{{p.fullname}}</div>
    <passenger-count [items]="passengers">
    </passenger-count>
    <passenger-detail
      *ngFor="let passenger of passengers"
      [detail]="passenger"
      (edit)="handleEdit($event)"
      (remove)="handleRemove($event)">
    </passenger-detail>
  </div>
  `
})
export class PassengersComponent {
  passengers: Passenger[];

  constructor(private service: PassengersService) {
    this.passengers = service.passengers;
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map(passenger => {
      if (passenger.id === event.id) {
        // Immutable operation by merging data
        return Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }

  handleRemove(event: Passenger) {
    // With immutable, angular will propagate changes
    this.passengers = this.passengers.filter(
      passenger => passenger.id !== event.id
    );
  }
}
