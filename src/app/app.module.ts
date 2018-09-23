import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent } from './app.component';
import { ChartModule } from 'angular-highcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighchartsChartComponent } from './highcharts-chart/highcharts-chart.component';
import { NgbdModalBasic } from './modal-basic/modal-basic.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent,
    NgbdModalBasic,
  
  ],
  imports: [
    BrowserModule,ChartModule,ReactiveFormsModule, 
    HttpClientModule, 
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
