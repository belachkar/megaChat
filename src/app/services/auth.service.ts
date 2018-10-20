import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;

  constructor() {}

  newUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(response => {
          console.log(response);
          resolve();
        })
        .catch(err => reject(console.log(err.message)));
    });
  }

}
