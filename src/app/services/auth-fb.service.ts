import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthFbService {
  user: any = {};
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async logInFb(_email: string, _pass: string) {
    let user = await this.afAuth.signInWithEmailAndPassword(_email, _pass);
    return user;
  }

  async singUpNewUser(_user: any) {
    try {
      let result = await this.afAuth.createUserWithEmailAndPassword(
        _user.email,
        _user.password
      );
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async logOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('fb_user');
    this.router.navigate(['/']);
    setTimeout(() => {
      window.location.reload();
    }, 400);
  }

  getUserData(): any {
    return this.user;
  }

  checkUserAuth() {
    this.afAuth.authState.subscribe((user: any) => {
      if (!user) {
        this.router.navigate(['/']);
        this.logOut();
      } else {
        for (let key in user) {
          this.user[key] = user[key];
        }
      }
    });
  }
}
