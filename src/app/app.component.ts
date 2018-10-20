import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mega Chat App';

  constructor() {
    const fbConfig = {
      apiKey: 'AIzaSyDJsLFUtOue3U5bstCkKE86E6ClGZVIliM',
      authDomain: 'megachat-564ba.firebaseapp.com',
      databaseURL: 'https://megachat-564ba.firebaseio.com',
      projectId: 'megachat-564ba',
      storageBucket: 'megachat-564ba.appspot.com',
      messagingSenderId: '465908249921'
    };
    firebase.initializeApp(fbConfig);
  }

}
