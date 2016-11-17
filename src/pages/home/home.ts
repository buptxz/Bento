import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { EventCreatePage } from '../event-create/event-create';
import { EventListPage } from '../event-list/event-list';
import { MenuCreatePage} from '../menu-create/menu-create';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { OrderPage } from '../order/order';

import { Data } from '../../providers/data';
import { MenuData } from '../../providers/menu-data';
import { AuthData } from '../../providers/auth-data';
// import { EventData } from '../../providers/event-data';
// import { ProfileData} from '../../providers/profile-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public quantities;
  public menuList: any;

  constructor(public navCtrl: NavController, public data: Data, public authData: AuthData){

    this.data.getMenuList().on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          id: snap.val().id,
          name: snap.val().name,
          price: snap.val().price,
          picture: snap.val().picture,
        });
      });
      this.menuList = rawList;
    });
  }

  goToProfile(){
    this.navCtrl.push(ProfilePage);
  }

  addToMenu(){
    this.navCtrl.push(MenuCreatePage);
  }

  goToCreate(){
    this.navCtrl.push(EventCreatePage);
  }

  goToList(){
    this.navCtrl.push(EventListPage);
  }

  pushOrderPage() {
    this.navCtrl.push(OrderPage);
  }

  addToCart(item) {
    this.data.addToCart(item);
  }

  ionViewDidLoad() {
    this.quantities = [
      {title: "1"},
      {title: "2"},
      {title: "3"},
      {title: "4"},
      {title: "5"},
      {title: "6"},
      {title: "7"}
    ];
    // this.menus = [
    //   {title: "Kung-Pao Chicken", price: "8", image: "https://firebasestorage.googleapis.com/v0/b/bento-c52af.appspot.com/o/IMG_0016.JPG?alt=media&token=7366ec91-aa92-40af-ad59-81b661a9c748"},
    //   {title: "Jianbing Guozi", price: "4", image: "https://firebasestorage.googleapis.com/v0/b/bento-c52af.appspot.com/o/kung-pao-chicken.jpg?alt=media&token=87de86a4-fb96-4a7c-8ecc-c5851c8b35b1"}
    // ];
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

  goToSignup() {
    this.navCtrl.push(SignupPage);
  }
}
