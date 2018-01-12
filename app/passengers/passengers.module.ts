import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passengers-dashboardcomponent';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
import { PassengerDashboardService } from './services/passenger-dashboard.service';

@NgModule({
  declarations: [
    PassengerCountComponent,
    PassengerDashboardComponent,
    PassengerDetailComponent,
    PassengerViewerComponent
  ],
  imports: [CommonModule],
  // we export only the container not children
  exports: [PassengerViewerComponent],
  providers: [PassengerDashboardService]
})
export class PassengersModule {}
