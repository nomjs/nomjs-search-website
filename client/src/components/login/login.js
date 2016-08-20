import {inject} from 'aurelia-framework';
import {LoginService} from './login-service';

@inject(LoginService)
export class LoginCustomElement {
  constructor(loginService) {
    this.loginService = loginService;
    this.loginUrl = this.loginService.buildLoginUrl();
  }

  activate() {
    return this._initUser();
  }

  _initUser() {
    return this.loginService.currentUser()
      .then(user => {
        this.user = user;
        this.isUserLoggedIn = true;
      })
      .catch(() => {
        this.user = null;
        this.isUserLoggedIn = false;
      });
  }
}
