import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';

@Component({
  selector: 'app-passengers',
  styleUrls: ['passengers.component.scss'],
  template: `
  <div class="app">
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
export class PassengersComponent implements OnInit {
  passengers: Passenger[];

  constructor(private service: PassengerDashboardService) {}

  ngOnInit(): void {
    this.passengers = this.service.getPassengers();
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
