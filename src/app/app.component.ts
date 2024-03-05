import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild(BaseChartDirective, { static: true }) chart: any;
  title = 'angular-chartjs-example';
  chartData: any = [];
  chartLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  chartOptions: any = {};

  ngOnInit(): void {
    this.chartData = [
      {
        label: 'Weekly Sales',
        data: [
          { x: '2024-03-05', y: 'Mon' },
          { x: '2024-03-08', y: 'Tue' },
          { x: '2024-03-09', y: 'Wed' },
          { x: '2024-03-06', y: 'Thu' },
          { x: '2024-03-04', y: 'Fri' },
          { x: '2024-03-02', y: 'Sat' },
          { x: '2024-03-01', y: 'Sun' },
        ],
      },
    ];

    this.chartOptions = {
      responsive: true,
      scales: {
        xAxes: {
          type: 'time',
          unit: 'day',
          time: {
            displayFormats: {
              millisecond: 'MMM DD',
              second: 'MMM DD',
              minute: 'MMM DD',
              hour: 'MMM DD',
              day: 'MMM DD',
              week: 'MMM DD',
              month: 'MMM DD',
              quarter: 'MMM DD',
              year: 'MMM DD',
            },
          },
          display: true
        },
      },
    };
  }
}
