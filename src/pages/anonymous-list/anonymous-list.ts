import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AnonymousList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-anonymous-list',
  templateUrl: 'anonymous-list.html'
})
export class AnonymousListPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AnonymousListPage Page');
  }

}
