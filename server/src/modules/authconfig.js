'use strict';

const Ravel = require('ravel');
const Module = Ravel.Module;
const authconfig = Module.authconfig;

const USER_KEY = 'userid';

@authconfig
class AuthConfig extends Module {
  getUserById(userId) {
    this.log.debug(`getUserById: ${userId}`);

    // If we end up storing profile object in redis, then don't need to hit githuh API here?
    // TODO hit redis to get access token, then hit github API or redis to get profile object.
    // TODO promisify redis client in ravel?
    this.kvstore.get(`${USER_KEY}-${userId}`, (err, response) => {
      if (err) {
        this.log.error(err);
      } else {
        this.log.debug(`redis success for ${userId}: ${response}`);
      }
    });

    return Promise.resolve({id: userId, username: 'Ghnuberath'});
  }

  verifyCredentials(accessToken, refreshToken, profile) {
    // this.log.debug(`verifyCredentials: ${accessToken}, ${refreshToken}, ${JSON.stringify(profile)}`);
    // should we be storing profile in redis or just accessToken and userId?
    let payload = {accessToken, profile};
    this.kvstore.set(`${USER_KEY}-${profile.id}`, JSON.stringify(payload));
    return Promise.resolve(profile);
  }
}

module.exports = AuthConfig;
