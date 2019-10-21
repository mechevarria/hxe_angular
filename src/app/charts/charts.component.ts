import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts'
import { ChartsService } from './charts.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html'
})
export class ChartsComponent implements OnInit {
  // colors pulled from https://coreui.io/docs/getting-started/ui-kit/
  colors: Color[] = [{ backgroundColor: ['#f86c6b', '#20a8d8', '#ffc107', '#4dbd74', '#a4b7c1', '#63c2de', '#29363d', '#f86c6b', '#20a8d8', '#ffc107', '#4dbd74', '#a4b7c1'] }];

  donutLabels: string[] = [];
  donutData: number[] = [];
  donutType = 'doughnut';

  barOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barLabels: string[] = [];
  barType = 'bar';
  barLegend = false;
  barData: any[] = [{}];

  constructor(private chartService: ChartsService) { }

  ngOnInit() {
    this.chartService.getData().subscribe(res => {
      this.donutLabels = res.donutLabels;
      this.donutData = res.donutData;
      this.barLabels = res.barLabels;
      this.barData = res.barData;
    });

  }
}
