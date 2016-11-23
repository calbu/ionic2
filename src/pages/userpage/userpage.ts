import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/authservice';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from 'ionic-native';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { MarinariePage } from '../marinarie/marinarie';


@Component({
  selector: 'page-userpage',
  templateUrl: 'userpage.html'
})
export class Userpage {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController, public authservice: AuthService, public alertCtrl: AlertController, public menu: MenuController) {
    // set our app's pages
    this.pages = [
      { title: 'My First List', component: ListPage },
      { title: 'colregA', component: MarinariePage }, //  "colregA",  "RND",  "NavigatieAgrement_C",  "marinarieD",  "ManevraAgrement_C",  "conducereD",  "MarinarieAgrement_C"
      { title: 'RND', component: MarinariePage },
      { title: 'NavigatieAgrement_C', component: MarinariePage },
      { title: 'ManevraAgrement_C', component: MarinariePage },
      { title: 'conducereD', component: MarinariePage },
      { title: 'MarinarieAgrement_C', component: MarinariePage },
      { title: 'marinarieD', component: MarinariePage },
    ];
  }

  logout() {
    this.authservice.logout();
    this.navCtrl.setRoot(HomePage);
  }

  getinfo() {
    this.authservice.getinfo().then(data => {
      // if (data.success) {
      //   var alert = this.alertCtrl.create({
      //     title: data.success,
      //     subTitle: data.msg,
      //     buttons: ['ok']
      //   });
      //   alert.present();
      // }

    })
  }


  ionViewDidLoad() {
    console.log('Hello Userpage Page');
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    console.log(`pagina ${page.title}`);
    this.menu.close();
    this.navCtrl.push(page.component, { title: page.title });
    //this.nav.rootParams.set({ title: page.title })
    // navigate to the new page if it is not the current page
    //this.nav.setRoot(page.component);
  }

}