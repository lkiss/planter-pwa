import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndPointsComponent } from './sensor-endpoints.component';

describe('SensorEndpointsComponent', () => {
  let component: EndPointsComponent;
  let fixture: ComponentFixture<EndPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
