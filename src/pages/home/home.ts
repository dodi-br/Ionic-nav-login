import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  username = '';
  email = '';

  constructor(public nav: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
