import { Component, OnInit } from '@angular/core';
import { DbFbService } from '../../services/db-fb.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  _ar: any[] = [];
  constructor(private dbFb: DbFbService) {}

  ngOnInit(): void {
    this._ar = this.dbFb.getUsersArrayData();
  }

  searchByName(ev: any): void {
    console.log(ev.target.value);
    this.dbFb.filterArrayUsersBy(ev.target.value, 'name');
  }
  searchByEmail(ev: any): void {
    console.log(ev.target.value);
    this.dbFb.filterArrayUsersBy(ev.target.value, 'email');
  }
  searchByCity(ev: any): void {
    console.log(ev.target.value);
    this.dbFb.filterArrayUsersBy(ev.target.value, 'city');
  }
  searchByPhone(ev: any): void {
    console.log(ev.target.value);
    this.dbFb.filterArrayUsersBy(ev.target.value, 'phone');
  }
}
