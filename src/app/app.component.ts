import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { MarinariePage } from '../pages/marinarie/marinarie';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public menu: MenuController) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
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

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    this.nav.push(page.component, { title: page.title });    
    //this.nav.rootParams.set({ title: page.title })
    // navigate to the new page if it is not the current page
    //this.nav.setRoot(page.component);
  }
}
