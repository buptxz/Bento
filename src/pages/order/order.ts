import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';

/*
  Generated class for the Order page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {

  public firstParam:any;
  public secondParam:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.firstParam = navParams.get("param1");
    this.secondParam = navParams.get("param2");
  }

  ionViewDidLoad() {
    console.log('Hello OrderPage Page');
  }

}
