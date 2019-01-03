import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reading } from 'src/app/components/reading/reading';
import { SERVER_ENDPOINTS } from 'src/app/constants';
import { Configuration } from 'src/app/components/configuration/configuration';

@Injectable({
  providedIn: 'root'
})
export class EndPointService {
  constructor(private http: HttpClient) { }

  getReadings(sensorId: string, endPointId: string) {
    return this.http.get<Reading[]>(`${SERVER_ENDPOINTS.SENSOR}/${sensorId}/${endPointId}/reading`);
  }

  getConfiguration(sensorId: string, endPointId: string) {
    return this.http.get<Configuration>(`${SERVER_ENDPOINTS.SENSOR}/${sensorId}/${endPointId}/configuration`);
  }
}
