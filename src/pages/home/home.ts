import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  accounts: Observable<any>;

  constructor(public navCtrl: NavController, public http: Http) {
    this.http.get('http://172.18.2.137/IonicCrud/Services/WebService1.asmx/getListAccounts')
    .map(data => data.json()).subscribe(res => {
      this.accounts = res;
      // console.log(this.accounts);
    })
  }

}
