import { Component, OnInit, Input } from '@angular/core';
import { Reading } from './reading';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent implements OnInit {

  @Input() reading: Reading;

  constructor() { }

  ngOnInit() {
  }

}
