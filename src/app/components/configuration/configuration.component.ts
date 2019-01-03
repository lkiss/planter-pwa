import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Configuration } from './configuration';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  @Input() configuration: Observable<Configuration>;

  currentConfiguration: Configuration = {} as any;

  constructor() { }

  ngOnInit() {
    this.configuration.subscribe(configuration => this.currentConfiguration = configuration);
  }
}
