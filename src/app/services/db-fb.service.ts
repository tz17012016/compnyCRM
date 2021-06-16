import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class DbFbService {
  customers_ar: any[] = [];
  users_ar: any[] = [];
  realCustomers_ar: any[] = [];
  realUsers_ar: any[] = [];

  constructor(private afs: AngularFireDatabase) {
    this.getCustomers();
    this.getUsers();
  }

  getCustomersArrayData(): any {
    return this.customers_ar;
  }
  getUsersArrayData(): any {
    return this.users_ar;
  }

  addUser(_body: any): void {
    _body.password = '*****';
    this.afs.list('users').push(_body);
  }

  addCustomer(_body: any): void {
    this.afs.list('customers').push(_body);
  }

  delCustomer(_id: any): void {
    this.afs.list('customers/' + _id).remove();
  }

  editCustomer(_id: any, _body: any): void {
    this.afs.object('customers/' + _id).update(_body);
  }

  getObserUsers(): any {
    return this.afs.list('users').snapshotChanges();
  }

  getObserCustomers(): any {
    let userId = localStorage['fb_user'] || '';
    return this.afs
      .list('customers', (ref) => ref.orderByChild('user_id').equalTo(userId))
      .snapshotChanges();
  }

  getCustomers(): void {
    this.getObserCustomers().subscribe((res: any) => {
      this.customers_ar.splice(0, this.customers_ar.length);
      res.map((item: any) => {
        let newItem = item.payload.val();
        newItem.id = item.payload.key;
        this.customers_ar.push(newItem);
      });
      this.realCustomers_ar = [...this.customers_ar];
    });
  }
  getUsers(): void {
    this.getObserUsers().subscribe((res: any) => {
      this.users_ar.splice(0, this.users_ar.length);
      res.map((item: any) => {
        let newItem = item.payload.val();
        newItem.id = item.payload.key;
        this.users_ar.push(newItem);
      });
      this.realUsers_ar = [...this.users_ar];
    });
  }

  filterArrayBy(_filterSearch: any, _key: any): void {
    let temp_ar = this.realCustomers_ar.filter((item) => {
      return item[_key].includes(_filterSearch);
    });
    this.customers_ar.splice(0, this.customers_ar.length, ...temp_ar);
  }
  filterArrayUsersBy(_filterSearch: any, _key: any): void {
    let temp_ar = this.realUsers_ar.filter((item) => {
      return item[_key].includes(_filterSearch);
    });
    this.users_ar.splice(0, this.users_ar.length, ...temp_ar);
  }
}
