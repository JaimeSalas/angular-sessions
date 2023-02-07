import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  errorMessage: string = '';
  pageTitle = 'Log In';

  constructor(private authService: AuthService, private router: Router) {}

  cancel() {
    this.router.navigate(['welcome']);
  }

  login(loginForm: NgForm): void {
    console.log(loginForm);
    if (loginForm && loginForm.valid) {
      const { userName, password } = loginForm.form.value;
      this.authService.login(userName, password);

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        // TODO: Navigate to games
      }
    }
  }
}
