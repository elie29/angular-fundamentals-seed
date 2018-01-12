import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passengers-dashboardcomponent';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
import { PassengerDashboardService } from './services/passenger-dashboard.service';

const routes: Routes = [
  {
    path: 'passengers',
    children: [
      {
        path: '', // /passengers
        component: PassengerDashboardComponent
      },
      {
        path: ':id', // passengers/1
        component: PassengerViewerComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    PassengerCountComponent,
    PassengerDashboardComponent,
    PassengerDetailComponent,
    PassengerFormComponent,
    PassengerViewerComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: [PassengerDashboardService]
})
export class PassengersModule {}
