import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Reading } from '../reading/reading';
import { EndPointService } from 'src/app/services/endpoint/endpoint.service';
import { Configuration } from '../configuration/configuration';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sensor',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.scss']
})
export class EndPointComponent implements OnInit {

  readings: Observable<Reading[]>;
  configuration: Observable<Configuration>;

  constructor(private endPointService: EndPointService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const sensorId = this.activatedRoute.snapshot.paramMap.get("sensorId");
    const endPointId = this.activatedRoute.snapshot.paramMap.get("endPointId");
    this.readings = this.endPointService.getReadings(sensorId, endPointId);
    this.configuration = this.endPointService.getConfiguration(sensorId, endPointId);
  }
}
