import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PassengersComponent } from './containers/passengers/passengers.component';
import { PassengersService } from './services/passengers.service';

@NgModule({
  declarations: [PassengersComponent],
  imports: [CommonModule],
  exports: [PassengersComponent],
  providers: [PassengersService]
})
export class PassengersModule {}
