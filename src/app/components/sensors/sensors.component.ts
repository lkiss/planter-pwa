import { Component, OnInit } from '@angular/core';
import { Sensor } from './sensor';
import { SensorService } from 'src/app/services/sensor/sensor.service';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {

  constructor(private sensorService: SensorService) { }

  sensors: Observable<Sensor[]>;

  ngOnInit() {
    this.sensors = this.sensorService.getSensors();
  }

}
