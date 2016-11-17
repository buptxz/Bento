import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

/*
  Generated class for the MenuData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MenuData {

  public menuList: any;
  public menuPictureRef: any;
  public currentUser: any;
  public cart: any;

  constructor() {
    // this.currentUser = firebase.auth().currentUser.uid;
    // this.cart = firebase.database().ref('userProfile/' + this.currentUser + '/cart');
    this.menuList = firebase.database().ref('menu');
    this.menuPictureRef = firebase.storage().ref('menuPicture');
  }

  createItem(name: string, price: number, itemPicture = null): any {
    return this.menuList.push({
      name: name,
      price: price
    }).then( newItem => {
      this.menuList.child(newItem.key).child('id').set(newItem.key);

      if (itemPicture != null) {
        this.menuPictureRef.child(newItem.key).child('picture.img')
      .putString(itemPicture, 'base64', {contentType: 'image/png'})
        .then((savedPicture) => {
          this.menuList.child(newItem.key).child('picture')
          .set(savedPicture.downloadURL);
        });
      }
    });
  }

  getItem(key, child) {
    console.log(key);
    return this.menuList.child(key).child(child).on('value', snap => {
      snap.val();
    });
  }

  // addToCart(id, quantity) {
  //   return this.cart.child(id).update({
  //     id: quantity,
  //   });
  // }

}
