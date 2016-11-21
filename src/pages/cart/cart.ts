import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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
  public total: any;

  constructor(public navCtrl: NavController, public data: Data,
    public menuData: MenuData, public alertCtrl: AlertController) {

    this.data.getCart().on('value', snapshot => {
      this.total = 0;
      let rawList = [];
      snapshot.forEach( snap => {
        this.total += snap.val().price * snap.val().item_qty;
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
    if (item.item_qty == 1) {
      this.removeFromCart(item);
    } else {
      this.data.decrement(item);
    }
  }

  removeFromCart(item) {
    let confirm = this.alertCtrl.create({
      title: 'Remove item?',
      // message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.data.removeFromCart(item);
            console.log('Disagree clicked');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  submitOrder(cart) {
    let confirm = this.alertCtrl.create({
      title: 'Submit order?',
      // message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.data.submitOrder(cart, cart.length);
            console.log('Disagree clicked');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
