import { Injectable } from '@angular/core';

import { UserModel } from './user.model';

// OpenId - Auth0
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: UserModel | null = null;
  redirectUrl!: string;

  constructor() {}

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  login(userName: string, password: string): void {
    this.currentUser = {
      id: 3,
      isAdmin: false,
      userName
    };
  }

  logout(): void {
    this.currentUser = null;
  }
}
