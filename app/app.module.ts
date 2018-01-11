import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengersModule } from './passengers/passengers.module';

@NgModule({
  imports: [BrowserModule, PassengersModule, HttpClientModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule {}
