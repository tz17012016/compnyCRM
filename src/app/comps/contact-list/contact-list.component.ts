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
    this.dbFb.filterArrayUsersBy(ev.target.value.toLowerCase(), 'name');
  }
  searchByEmail(ev: any): void {
    this.dbFb.filterArrayUsersBy(ev.target.value.toLowerCase(), 'email');
  }
  searchByCity(ev: any): void {
    this.dbFb.filterArrayUsersBy(ev.target.value.toLowerCase(), 'city');
  }
  searchByPhone(ev: any): void {
    this.dbFb.filterArrayUsersBy(ev.target.value.toLowerCase(), 'phone');
  }
}
