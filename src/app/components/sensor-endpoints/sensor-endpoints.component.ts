import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoint } from '../endpoint/endpoint';
import { SensorService } from 'src/app/services/sensor/sensor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sensor-endpoints',
  templateUrl: './sensor-endpoints.component.html',
  styleUrls: ['./sensor-endpoints.component.scss']
})
export class EndPointsComponent implements OnInit {

  endPoints: Observable<EndPoint[]>;

  constructor(private sensorService: SensorService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const sensorId = this.activatedRoute.snapshot.paramMap.get("sensorId");
    this.endPoints = this.sensorService.getSensorEndPoints(sensorId);
  }

}
