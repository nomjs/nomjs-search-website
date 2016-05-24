'use strict';

const Ravel = require('ravel');
const Module = Ravel.Module;
const authconfig = Module.authconfig;

@authconfig
class AuthConfig extends Module {
  getUserById(userId) {
    this.log.debug(`getUserById: ${userId}`);
    // TODO hit redis to get access token, then hit github API or redis to get profile object.
    return Promise.resolve({id: userId, username: 'Ghnuberath'});
  }

  verifyCredentials(accessToken, refreshToken, profile) {
    this.log.debug(`verifyCredentials: ${accessToken}, ${refreshToken}, ${JSON.stringify(profile)}`);
    // TODO store accessToken and profile if we want to, in session (i.e. redis)
    return Promise.resolve(profile);
  }
}

module.exports = AuthConfig;
