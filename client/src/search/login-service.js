import {inject} from 'aurelia-framework';
import {AppConfig} from '../app-config';
import uuid from 'node-uuid';

@inject(AppConfig)
export class LoginService {
  constructor(appConfig) {
    this.appConfig = appConfig;
  }

  buildLoginUrl() {
    // TODO what scopes are needed? Maybe server side config should provide this information...
    let scopes = 'user:email';
    let state = uuid.v4();
    return `https://github.com/login/oauth/authorize?scope=${scopes}&state=${state}&client_id=${this.appConfig.config.githubOauthClientId}`;
  }
}
