import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['Passenger-dashboard.component.scss'],
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
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor(private service: PassengerDashboardService) {}

  ngOnInit(): void {
    this.service.getPassengers().subscribe(items => (this.passengers = items));
  }

  handleEdit(event: Passenger) {
    this.service.updatePassenger(event).subscribe(data => {
      this.passengers = this.passengers.map(passenger => {
        if (passenger.id === data.id) {
          // Immutable operation by merging data
          return Object.assign({}, passenger, data);
        }
        return passenger;
      });
    });
  }

  handleRemove(event: Passenger) {
    this.service.removePassenger(event).subscribe(data => {
      // With immutable, angular will propagate changes
      this.passengers = this.passengers.filter(
        passenger => passenger.id !== event.id
      );
    });
  }
}
