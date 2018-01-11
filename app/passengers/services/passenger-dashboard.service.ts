import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators/delay';

import { Passenger } from '../models/passenger.interface';

const PASSENGER_API = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http.get(PASSENGER_API).pipe(delay(2000)) as Observable<
      Passenger[]
    >;
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.put(
      `${PASSENGER_API}/${passenger.id}`,
      passenger
    ) as Observable<Passenger>;
  }

  removePassenger(passenger: Passenger): Observable<Object> {
    return this.http.delete(`${PASSENGER_API}/${passenger.id}`);
  }
}
