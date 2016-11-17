import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { AnonymousListPage } from '../anonymous-list/anonymous-list';
import { AuthData } from '../../providers/auth-data';

/*
  Generated class for the Landing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {

  constructor(public navCtrl: NavController, public authData: AuthData) {}

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

  goToList(){
    this.authData.createAnonymousUser().then( () => {
      this.navCtrl.setRoot(TabsPage);
    });
  }
}
