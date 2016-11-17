import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import firebase from 'firebase';
import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {

  public currentUser: any;
  public menuList: any;
  public cart: any;

  constructor(public http: Http) {
    this.currentUser = firebase.auth().currentUser.uid;
    this.cart = firebase.database().ref('userProfile/' + this.currentUser + '/cart');
    this.menuList = firebase.database().ref('menu/');
  }

  getMenuList() {
    return this.menuList;
  }

  getCart() {
    return this.cart;
  }

  addToCart(item) {
    this.cart.once('value', (snapshot) => {
      if (snapshot.hasChild(item.id)) {
        //if item is already in the cart
        var currentQty = snapshot.child(item.id).val().item_qty;
        // console.log(currentQty);
        this.cart.child(item.id).update({   // update
            item_qty : currentQty + 1
          });
      } else {
        //if item is new in the cart
        this.cart.child(item.id).set({ // set
          id: item.id,
          name: item.name,
          picture: item.picture,
          price: item.price,
          item_qty: 1
        });
      }
    })
  }

  increment(item) {
    this.cart.once('value', (snapshot) => {
      if (snapshot.hasChild(item.id)) {
        //if item is already in the cart
        var currentQty = snapshot.child(item.id).val().item_qty;
        // console.log(currentQty);
        this.cart.child(item.id).update({   // update
            item_qty : currentQty + 1
          });
      }
    })
  }

  decrement(item) {
    this.cart.once('value', (snapshot) => {
      if (snapshot.hasChild(item.id)) {
        //if item is already in the cart
        var currentQty = snapshot.child(item.id).val().item_qty;
        // console.log(currentQty);
        if (currentQty <= 1) {
          this.removeFromCart(item);
        } else {
          this.cart.child(item.id).update({   // update
              item_qty : currentQty - 1
            });
        }
      }
    })
  }

  removeFromCart(item) {
    // console.log(item);
    this.cart.child(item.id).remove();
  }

}
