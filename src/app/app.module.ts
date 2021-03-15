import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Home } from '../components/home/home.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { TemperatureHistory } from 'src/components/temperature-history/temperature-history.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureHistory,
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule,
  ],
  exports: [
  ],
  providers: [
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
