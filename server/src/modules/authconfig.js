'use strict';

const Ravel = require('ravel');
const inject = Ravel.inject;
const Module = Ravel.Module;
const authconfig = Module.authconfig;

@authconfig
@inject('request-promise')
class AuthConfig extends Module {
  constructor(requestPromise) {
    super();
    this.requestPromise = requestPromise;
  }

  /**
   * Use Github public API to get profile information.
   * TODO: Avoid rate limit issues by using Conditional requests: https://developer.github.com/v3/#conditional-requests
   *  --> Will need to persist Etag and last-modified response headers somewhere associated with this username, redis? rethinkdb?
   * TODO: May need to pass oauth client id and secret as query string? https://developer.github.com/v3/#rate-limiting
   * TODO: User-Agent app name should be env var
   */
  getUserById(username) {
    this.log.debug(`getUserById: ${username}`);
    let options = {
      method: 'GET',
      uri: `https://api.github.com/users/${username}`,
      headers: {
        'User-Agent': 'nomjs-dev'
      },
      json: true
    };
    // TODO: Should we return the entire response object?
    return new Promise((resolve, reject) => {
      this.requestPromise(options)
        .then((response) => {
          this.log.debug(`=== AUTH CONFIG getUserById response from github: ${JSON.stringify(response)}`);
          resolve({
            id: response.username,
            username: response.username,
            profile: response
          });
        })
        .catch((err) => reject(err));
    });
  }

  /**
   * Resolve with username as "id" because that is what Github uses to lookup users.
   * TODO Where to persist accessToken?
   */
  verifyCredentials(accessToken, refreshToken, profile) {
    // this.log.debug(`verifyCredentials: ${accessToken}, ${refreshToken}, ${JSON.stringify(profile)}`);
    // return Promise.resolve({
    //   id: profile.username,
    //   accessToken: accessToken,
    //   githubProfile: profile
    // });
    profile.id = profile.username;
    return Promise.resolve(profile);
  }
}

module.exports = AuthConfig;
