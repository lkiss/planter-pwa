import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SensorsComponent } from './components/sensors/sensors.component';
import { EndPointsComponent } from './components/sensor-endpoints/sensor-endpoints.component';
import { EndPointComponent } from './components/endpoint/endpoint.component';

const routes: Routes = [
  { path: '', redirectTo: "sensors", pathMatch: "full" },
  { path: 'sensors', component: SensorsComponent },
  { path: 'sensors/:sensorId', component: EndPointsComponent },
  { path: 'sensors/:sensorId/:endPointId', component: EndPointComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
