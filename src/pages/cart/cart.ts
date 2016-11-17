import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Data } from '../../providers/data';
import { MenuData } from '../../providers/menu-data';
/*
  Generated class for the Cart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  public cart: any;

  constructor(public navCtrl: NavController, public data: Data, public menuData: MenuData) {
    this.data = data;
    this.data.getCart().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          id: snap.val().id,
          name: snap.val().name,
          price: snap.val().price,
          picture: snap.val().picture,
          item_qty: snap.val().item_qty
        });
      });
      this.cart = rawList;
    });
  }

  increment(item) {
    this.data.increment(item);
  }

  decrement(item) {
    this.data.decrement(item);
  }

  removeFromCart(item) {
    this.data.removeFromCart(item);
  }


}
