import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
  <div>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
      <div *ngIf="editing">
        <input
          type="text"
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name>
      </div>
      <div *ngIf="!editing">
        {{ detail.fullname }}
      </div>
      <div class="date">
        Check in date:
        {{ detail.checkInDate ? (detail.checkInDate | date: 'd MMMM y' | lowercase) : 'Not checked in' }}
      </div>
      <div class="children">
        Children: {{ detail.children?.length || 0 }}
      </div>
      <button (click)="toggleEdit()">
        {{ editing ? 'Done' : 'Edit' }}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
    </div>
  `
})
export class PassengerDetailComponent {
  @Input() detail: Passenger;

  @Output() edit: EventEmitter<Passenger> = new EventEmitter();

  @Output() remove: EventEmitter<Passenger> = new EventEmitter();

  editing: boolean = false;

  private fullname = '';

  onNameChange(value: string) {
    this.fullname = value;
  }

  toggleEdit() {
    const fullname = this.fullname.trim();
    if (this.editing && fullname) {
      // Immutable change
      this.edit.emit({ ...this.detail, fullname });
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
