import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengersComponent } from './containers/passengers/passengers.component';
import { PassengersService } from './services/passengers.service';

@NgModule({
  declarations: [
    PassengersComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [CommonModule],
  // we export only the container not children
  exports: [PassengersComponent],
  providers: [PassengersService]
})
export class PassengersModule {}
