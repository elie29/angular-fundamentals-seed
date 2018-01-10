import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  template: `
  <h3>Airline Passengers</h3>
  <div>
    Total Checked In: {{ checkedIn() }}/{{ items.length }}
  </div>
  `
})
export class PassengerCountComponent {
  @Input() items: Passenger[] = [];

  checkedIn(): number {
    return this.items.filter(item => item.checkedIn).length;
  }
}
