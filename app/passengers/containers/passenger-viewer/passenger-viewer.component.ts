import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { PassengerDashboardService } from '../../services/passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
  <div>
    <passenger-form
      [detail]="passenger"
      (update)="handleUpdate($event)"
    >
    </passenger-form>
  </div>
  `
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  constructor(private service: PassengerDashboardService) {}

  ngOnInit(): void {
    this.service.getPassenger(1).subscribe(data => (this.passenger = data));
  }

  handleUpdate(passenger: Passenger) {
    this.service
      .updatePassenger(passenger)
      .subscribe(data => (this.passenger = { ...passenger }));
  }
}
