import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartModule} from 'primeng/chart';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { MenuComponent } from './menu/menu.component';
import { StatisticComponent } from './statistic/statistic.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MenuComponent,
    StatisticComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
