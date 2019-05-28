import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {ButtonModule} from 'primeng/button';
import {ChartModule} from 'primeng/chart';

import { AppComponent } from './app.component';
// import { TestComponent } from './test/test.component';
import { TableComponent } from './table/table.component';
// import { GraphicsComponent } from './graphics/graphics.component';
import { MenuComponent } from './menu/menu.component';
import { StatisticComponent } from './statistic/statistic.component';
// import { ChartsComponent } from './charts/charts.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    // TestComponent,
    TableComponent,
    // GraphicsComponent,
    MenuComponent,
    StatisticComponent,
    // ChartsComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    // ButtonModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
