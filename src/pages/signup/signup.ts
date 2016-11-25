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
    password: '',
    email:'',
    phone:'',
    city:''
  };

  constructor(public navCtrl: NavController, public authservice: AuthService, public alertCtrl: AlertController) { }

  register(user) {
    console.log(`save user ${JSON.stringify(user)}`);
    this.authservice.adduser(user).then(data => {
      if (data) {
        console.log(`user created ${JSON.stringify(data)}`);
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