import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Baggage, Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form #form="ngForm" (ngSubmit)="onSubmit(form)">
      <div>
        Passenger Name: <input
          type="text"
          name="fullname"
          [ngModel]="detail?.fullname"
          required
          #fullname="ngModel"
          />
          <div class="error" *ngIf="fullname.dirty && fullname.errors?.required">Passenger name is required</div>
      </div>

      <div>
        Passenger ID: <input
          type="text"
          name="id"
          [ngModel]="detail?.id"
          required
          #id="ngModel"
          />
          {{ id.errors | json }}
      </div>

      <div>
        <label>
          <input type="checkbox" name="checkedIn"
            [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)" />
        </label>
      </div>

      <div *ngIf="form.value?.checkedIn">
        Check In Date: <input
          type="text"
          name="checkInDate"
          [ngModel]="detail?.checkInDate"/>
      </div>

      <div>
        Luggage:
        <select name="baggage" [ngModel]="detail?.baggage">
          <option *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key === detail?.baggage"
            >
            {{ item.value }}</option>
        </select>
        <select name="baggage" [ngModel]="detail?.baggage">
          <option *ngFor="let item of baggage"
            [ngValue]="item.key"
            >
            {{ item.value }}</option>
        </select>
      </div>

      <button type="submit" [disabled]="form.invalid">Update passenger</button>
    </form>
  `
})
export class PassengerFormComponent {
  @Input() detail: Passenger;
  @Output() update: EventEmitter<Passenger> = new EventEmitter();

  baggage: Baggage[] = [
    { key: 'none', value: 'No baggage' },
    { key: 'hand-only', value: 'Hand baggage' },
    { key: 'hold-only', value: 'Hold baggage' },
    { key: 'hand-hold', value: 'Hand and hold baggage' }
  ];

  toggleCheckIn(checkedIn: boolean): void {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const passenger = { ...this.detail, ...form.value };
      this.update.emit(passenger);
    }
  }
}
