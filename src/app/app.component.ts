import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

// import { HomePage } from '../pages/home/home';
// import { LoginPage } from '../pages/login/login';
// import { TabsPage } from '../pages/tabs/tabs';
// import { MenuCreatePage } from '../pages/menu-create/menu-create';
import { LandingPage } from '../pages/landing/landing';
import { AnonymousListPage } from '../pages/anonymous-list/anonymous-list';
import firebase from 'firebase';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any = LandingPage;

  constructor(platform: Platform) {
    firebase.initializeApp({
      apiKey: "AIzaSyAo6_ii4vi2X4FAICqyLIksiqbHXaFa0-U",
      authDomain: "bento-c52af.firebaseapp.com",
      databaseURL: "https://bento-c52af.firebaseio.com",
      storageBucket: "bento-c52af.appspot.com",
      messagingSenderId: "511289658475"
    });

    let unsubscribe = firebase.auth().onAuthStateChanged( (user) => {
      if (!user) {
        this.rootPage = LandingPage;
        unsubscribe();
      // } else {
      //   unsubscribe();
      //   this.rootPage = TabsPage;
      }
    });

    // firebase.auth().onAuthStateChanged((user) => {
    //   if (!user) {
    //     this.rootPage = LoginPage;
    //   }
    // });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
