import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChartModule } from '../chartjs-ng2';

const html = ``;

describe('Component: chartjs-ng2', () => {
  let fixture:ComponentFixture<any>;
  let context:TestChartsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestChartsComponent],
      imports: [NgChartModule]
    });
    TestBed.overrideComponent(TestChartsComponent, {set: {template: html}});
    fixture = TestBed.createComponent(TestChartsComponent);
    context = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('fixture should not be null', () => {
    expect(fixture).not.toBeNull();
  });
});

@Component({
  selector: 'charts-test',
  template: ''
})

class TestChartsComponent {
}
