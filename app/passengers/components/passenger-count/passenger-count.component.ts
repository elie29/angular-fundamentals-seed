import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  template: `
  <h3>Airline Passengers</h3>
  <div>
    Total Checked In: {{ checkedIn() }}/{{ items?.length || 0 }}
  </div>
  `
})
export class PassengerCountComponent {
  @Input() items: Passenger[];

  /**
   * Safety check navigation.
   * items is not available immediately
   */
  checkedIn(): number {
    if (this.items) {
      return this.items.filter(item => item.checkedIn).length;
    }
    return 0;
  }
}
