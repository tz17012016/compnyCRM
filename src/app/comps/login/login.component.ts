import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFbService } from '../../services/auth-fb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('f') myForm: any;
  constructor(private authSer: AuthFbService, private router: Router) {}

  ngOnInit(): void {}

  async onSub() {
    if (this.myForm.form.status == 'VALID') {
      let formData = this.myForm.form.value;
      try {
        let data = await this.authSer.logInFb(
          formData.email,
          formData.password
        );
        if (data.user) {
          localStorage.setItem('fb_user', data.user.uid);
          this.router.navigate(['/admin']);
        }
      } catch (err) {
        if (err.code) {
          alert('Try again user or password worng');
        }
        console.log(err);
      }
    }
  }
}
