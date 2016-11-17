import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuData } from '../../providers/menu-data';
import { Camera } from 'ionic-native';
import { ImagePicker } from 'ionic-native';

/*
  Generated class for the MenuCreate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu-create',
  templateUrl: 'menu-create.html'
})
export class MenuCreatePage {
  itemPicture: any = null;

  constructor(public navCtrl: NavController, public menuData: MenuData) {
    this.navCtrl = navCtrl;
    this.menuData = menuData;
  }

  addToMenu(name: string, price: number) {
    this.menuData.createItem(name, price, this.itemPicture).then( () => {
      this.navCtrl.pop();
    });
  }

  takePicture(){
    Camera.getPicture({
      quality : 50,
      destinationType : Camera.DestinationType.DATA_URL,
      sourceType : Camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: Camera.EncodingType.PNG,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: true
    }).then(imageData => {
      this.itemPicture = imageData;
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

}
