import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators/delay';

import { Passenger } from '../models/passenger.interface';

const PASSENGER_API = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {}

  getPassengers(): Observable<Passenger[]> {
    // using a simple object
    // ---------------------
    // const headers = { 'x-token': 'myToken123456', 'x-valid': '52489' };

    // using HttpHeaders
    // -----------------
    // const headers = new HttpHeaders({
    //   'x-token': 'myToken0000111',
    //   'x-valid': '25487'
    // });

    // using immutable HttpHeaders
    // ---------------------------
    const headers = new HttpHeaders()
      .set('x-token', 'myToken555111')
      .set('x-valid', '125897');

    // withCredentials to send cookie for cross-site Access-Control requests. This never affects same-site requests.
    return this.http
      .get(PASSENGER_API, { headers, withCredentials: false })
      .pipe(delay(100)) as Observable<Passenger[]>;
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.http.get(`${PASSENGER_API}/${id}`) as Observable<Passenger>;
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
