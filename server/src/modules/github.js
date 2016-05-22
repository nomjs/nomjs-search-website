'use strict';

const Ravel = require('ravel');
const inject = Ravel.inject;
const Module = Ravel.Module;

// FIXME Remove when functionality replaced by provider
class GithubOauthError extends Ravel.Error {
  constructor(msg) {
    super(msg, constructor, 500);
  }
}

@inject('request-promise')
class Github extends Module {

  constructor(requestPromise) {
    super();
    this.requestPromise = requestPromise;
  }

  login(sessionCode, state, clientId, clientSecret) {
    let options = {
      method: 'POST',
      uri: 'https://github.com/login/oauth/access_token',
      json: true,
      body: {
        'client_id': clientId,
        'client_secret': clientSecret,
        'code': sessionCode,
        'state': state
      }
    };
    return new Promise((resolve, reject) => {
      this.requestPromise(options)
        .then((response) => resolve(response))
        .catch((err) => {
          this.log.error(err);
          reject(new GithubOauthError({error: 'Github Oauth failed'}));
        });
    });
  }
}

module.exports = Github;
