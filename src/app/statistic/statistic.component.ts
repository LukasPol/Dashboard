import { Component, OnInit } from '@angular/core';
import { DesafioService } from '../model/desafio.service';
import { Business } from '../model/Business';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  business: Business;

  constructor(private serv: DesafioService) { }

  ngOnInit() {
    this.setBusiness();
  }

  setBusiness() {
    this.business = this.serv.getBusiness();
    console.log(this.business.sales);
  }
}
