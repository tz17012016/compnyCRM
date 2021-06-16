import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthFbService {
  user: any = {};
  // afAtuh -> משתנה שיכול לעשות את כל הפעולות של אוטנטקציה
  // כגון לוג אין , לוג אווט , הרשמה , ואוטנטקציה אם מחובר
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

  // לוג אאוט
  async logOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('fb_user');
    this.router.navigate(['/']);
    setTimeout(() => {
      // to subscribe again to customers of new users
      window.location.reload();
    }, 400);

    // back to login
  }

  getUserData(): any {
    return this.user;
  }

  // בודק אם המשתמש מחובר
  checkUserAuth() {
    this.afAuth.authState.subscribe((user: any) => {
      if (!user) {
        // לא מזהה יוזר
        /*alert('You must login first to see the admin panel');
        this.router.navigate(['/']);*/
        this.logOut();
      } else {
        for (let key in user) {
          this.user[key] = user[key];
        }
      }
      console.log(user);
    });
  }
}
