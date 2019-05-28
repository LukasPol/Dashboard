import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart1: any;
  chart2: any;
  constructor() {
    this.chart1 = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Laptop',
          data: [50, 68, 40, 60, 20],
          fill: false,
          borderColor: '#B3AF94FF',
          pointBackgroundColor: '#B3AF94FF',
          pointBorderColor: '#B3AF94FF',
          pointHoverBackgroundColor: '#B3AF94FF',
          pointHoverBorderColor: '#B3AF94FF'
        },
        {
          label: 'Heardsets',
          data: [40, 63, 33, 44, 20],
          fill: false,
          borderColor: '#419EB0FF',
          pointBackgroundColor: '#419EB0FF',
          pointBorderColor: '#419EB0FF',
          pointHoverBackgroundColor: '#419EB0FF',
          pointHoverBorderColor: '#419EB0FF'
        },
        {
          label: 'Monitors',
          data: [35, 55, 40, 50, 20],
          fill: false,
          borderColor: '#E3BF6BFF',
          pointBackgroundColor: '#E3BF6BFF',
          pointBorderColor: '#E3BF6BFF',
          pointHoverBackgroundColor: '#E3BF6BFF',
          pointHoverBorderColor: '#E3BF6BFF'
        },
        {
          label: 'Phones',
          data: [20, 49, 25, 20, 15],
          fill: false,
          borderColor: '#A6CBE6FF',
          pointBackgroundColor: '#A6CBE6FF',
          pointBorderColor: '#A6CBE6FF',
          pointHoverBackgroundColor: '#A6CBE6FF',
          pointHoverBorderColor: '#A6CBE6FF'
        }
      ]
    };
    this.chart2 = {
      labels: ['Eletronics', 'Furniture', 'Toys'],
      datasets: [
        {
          data: [300, 150, 100],
          backgroundColor: [
            '#6D7A7DFF', '#B0416FFF', '#E3593DFF'
          ],
          hoverBackgroundColor: [
            '#6D7A7DFF', '#B0416FFF', '#E3593DFF'
          ]
        }
      ]
    };
   }

  ngOnInit() {
  }

}
