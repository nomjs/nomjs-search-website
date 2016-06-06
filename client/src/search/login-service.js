import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {AppConfig} from '../app-config';
import uuid from 'node-uuid';

@inject(AppConfig, HttpClient)
export class LoginService {
  constructor(appConfig, http) {
    this.appConfig = appConfig;
    this.http = http;
  }

  buildLoginUrl() {
    // TODO what scopes are needed? Maybe server side config should provide this information...
    let scopes = 'user:email';
    let state = uuid.v4();
    return `https://github.com/login/oauth/authorize?scope=${scopes}&state=${state}&client_id=${this.appConfig.config.githubOauthClientId}`;
  }

  currentUser() {
    return new Promise((resolve, reject) => {
      this.http.fetch('currentuser', {credentials: 'include'})
        .then(response => response.json())
        .then(user => resolve(user.user.profile))
        .catch(err => reject(err));
    });
    // this.http.fetch('currentuser', {credentials: 'include'})
    //   .then(response => response.json())
    //   .then(user => user);
  }
}
