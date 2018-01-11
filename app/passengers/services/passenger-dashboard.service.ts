import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Passenger } from '../models/passenger.interface';

const PASSENGER_API = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http.get(PASSENGER_API) as Observable<Passenger[]>;
  }
}
