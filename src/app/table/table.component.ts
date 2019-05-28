import { Component, OnInit } from '@angular/core';
import { DesafioService } from '../model/desafio.service';
import { Person } from '../model/person';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  peoples: Person[];
  constructor(private serv: DesafioService) {
    this.peoples = []
   }

  ngOnInit() {
    this.addperson();
  }

  addperson(){
    this.peoples = this.serv.getPeople();
    console.log(this.peoples);
  }
}
