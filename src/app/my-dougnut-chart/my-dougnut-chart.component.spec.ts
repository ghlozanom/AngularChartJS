import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDougnutChartComponent } from './my-dougnut-chart.component';

describe('MyDougnutChartComponent', () => {
  let component: MyDougnutChartComponent;
  let fixture: ComponentFixture<MyDougnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDougnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDougnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
