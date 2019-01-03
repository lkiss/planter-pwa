import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SensorsComponent } from './components/sensors/sensors.component';
import { ReadingComponent } from './components/reading/reading.component';
import { EndPointsComponent } from './components/sensor-endpoints/sensor-endpoints.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { EndPointComponent } from './components/endpoint/endpoint.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorsComponent,
    EndPointsComponent,
    EndPointComponent,
    ReadingComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
