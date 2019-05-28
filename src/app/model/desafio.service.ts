import { Injectable } from '@angular/core';
import { Business } from './Business';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class DesafioService {

  business: Business;
  peoples: Person[];
  // b: any;

  constructor() {
    // this.b = {name: 'ESIG', sales: 21324, income: 221324, views: 652234}
    // this.business = this.b;
    this.peoples = [];
    this.addperson();
    this.addbusiness();
  }

  addbusiness() {
    const b = {name: 'ESIG', sales: 21324, income: 221324, views: 652234};
    this.business = b;
  }

  addperson() {
    const p1 = {name: 'Jerry Mattedi', join: '13 aug 2018', phone: '251-661-5362', location: 'New York'};
    const p2 = {name: 'Elianora Vasilov', join: '13 aug 2018', phone: '351-661-3251', location: 'Ontario'};
    const p3 = {name: 'Marcos Anguiano', join: '13 aug 2018', phone: '251-661-5362', location: 'Milan'};
    const p4 = {name: 'Alvis Daen', join: '13 aug 2018', phone: '351-661-3252', location: 'Las Vegas'};
    const p5 = {name: 'Lissa Shipsey', join: '13 aug 2018', phone: '251-661-5362', location: 'San Francisco'};
    this.peoples.push(p1, p2, p3, p4, p5);
  }

  getPeople(): Person[]{
    return this.peoples;
  }

  getBusiness(): Business {
    return this.business;
  }
}
