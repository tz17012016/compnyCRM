import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-prods',
  templateUrl: './prods.component.html',
  styleUrls: ['./prods.component.css'],
})
export class ProdsComponent implements OnInit {
  prods_ar: any[] = [];
  @ViewChild('f') myForm: any;
  constructor(private afs: AngularFireDatabase) {}

  ngOnInit(): void {
    this.getRealFoods();
  }

  addProd(): void {
    if (this.myForm.form.status == 'VALID') {
      let newProd = this.myForm.form.value;
      this.afs.list('test_db').push(newProd);
    }
  }

  delProd(_idDel: any): void {
    if (confirm('Are you sure?')) {
      this.afs.list('test_db/' + _idDel).remove();
    }
  }

  getObserProds(): any {
    return this.afs.list('test_db').snapshotChanges();
  }

  getRealFoods(): void {
    this.getObserProds().subscribe((res: any) => {
      this.prods_ar.splice(0, this.prods_ar.length);
      res.map((item: any) => {
        let newItem = item.payload.val();
        newItem.id = item.payload.key;
        this.prods_ar.push(newItem);
      });
    });
  }
}
