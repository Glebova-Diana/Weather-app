import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginUser = {
    login: 'Test user',
    password: 'qwerty'
  };

  constructor() { }

  set userLogin(user) {
    this.loginUser = user;
  }

  get userLogin() {
    return this.loginUser;
  }
}
