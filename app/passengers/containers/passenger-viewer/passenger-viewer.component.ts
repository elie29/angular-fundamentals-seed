import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators/switchMap';

import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
  <div>
    <button type="button" (click)="goBack()">&lsaquo; Go back</button>
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

  constructor(
    private service: PassengerDashboardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap(params => this.service.getPassenger(params.id)))
      .subscribe(data => (this.passenger = data));
  }

  handleUpdate(passenger: Passenger) {
    this.service
      .updatePassenger(passenger)
      .subscribe(data => (this.passenger = { ...passenger }));
  }

  goBack(): void {
    this.router.navigate(['/passengers']);
  }
}
