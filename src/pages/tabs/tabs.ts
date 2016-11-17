import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { CartPage } from '../cart/cart';
import { AboutPage } from '../about/about';
import { OrderPage } from '../order/order';
import { LoginPage } from '../login/login';

import { Data } from '../../providers/data';
/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = CartPage;
  tab3Root: any = AboutPage;
  tab4Root: any = LoginPage;

  public badgeCount: any;

  constructor(public data: Data) {
    // At first, I put this function in data.ts and then transfer the badgeCount here. I don't know why it can't work.
    this.data.getCart().on('value', snapshot => {
      let badge: any = 0;
      snapshot.forEach( snap => {
        badge += snap.val().item_qty;
      })
      // console.log("badge = ", <string>badge);
      if (badge == 0) {
        this.badgeCount = undefined;
      } else {
        this.badgeCount = <string>badge;
      }
      // console.log(this.badgeCount);
    })

  }
}
