import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/authservice';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class Signup {
  newcreds = {
    name: '',
    password: ''
  }
  constructor(public navCtrl: NavController, public authservice: AuthService, public alertCtrl: AlertController) { }

  register(user) {
    this.authservice.adduser(user).then(data => {
      if (data) {
        var alert = this.alertCtrl.create({
          title: 'Success',
          subTitle: 'User Created',
          buttons: ['ok']
        });
        alert.present();
      }
    });
  }


  ionViewDidLoad() {
    console.log('Hello Signup Page');
  }

}