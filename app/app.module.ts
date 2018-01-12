import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { PassengerDashboardComponent } from './passengers/containers/passenger-dashboard/passengers-dashboardcomponent';
import { PassengerViewerComponent } from './passengers/containers/passenger-viewer/passenger-viewer.component';
import { PassengersModule } from './passengers/passengers.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: PassengerDashboardComponent },
  { path: 'viewer', component: PassengerViewerComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    PassengersModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
