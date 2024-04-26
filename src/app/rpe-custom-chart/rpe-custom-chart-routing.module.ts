import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RpeCustomChartPage } from './rpe-custom-chart.page';

const routes: Routes = [
  {
    path: '',
    component: RpeCustomChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RpeCustomChartPageRoutingModule {}
