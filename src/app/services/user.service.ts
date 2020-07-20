import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginUser = {
    login: 'Tester',
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
