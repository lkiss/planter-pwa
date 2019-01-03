import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_ENDPOINTS } from 'src/app/constants';
import { Observable } from 'rxjs';
import { Sensor } from 'src/app/components/sensors/sensor';
import { EndPoint } from 'src/app/components/endpoint/endpoint';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private http: HttpClient) { }

  getSensors(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(SERVER_ENDPOINTS.SENSOR);
  }

  getSensorEndPoints(sensorId: string) {
    return this.http.get<EndPoint[]>(`${SERVER_ENDPOINTS.SENSOR}/${sensorId}`);
  }
}
