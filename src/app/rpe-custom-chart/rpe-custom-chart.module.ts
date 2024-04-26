import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RpeCustomChartPageRoutingModule } from './rpe-custom-chart-routing.module';

import { RpeCustomChartPage } from './rpe-custom-chart.page';
import { RpeCustomChartService } from './rpe-custom-chart.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RpeCustomChartPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RpeCustomChartPage],
  providers: [RpeCustomChartService]
})
export class RpeCustomChartPageModule {}
