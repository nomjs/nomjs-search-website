'use strict';

const Ravel = require('ravel');
const Module = Ravel.Module;
const authconfig = Module.authconfig;

@authconfig
class AuthConfig extends Module {

  // TODO: userId is actually username
  // hit Github Public API to get profile https://api.github.com/users/:username
  getUserById(userId) {
    this.log.debug(`getUserById: ${userId}`);
    return Promise.resolve({id: userId, username: 'Ghnuberath'});
  }

  /**
   * Resolve with username as "id" because that is what Github uses to lookup users.
   */
  verifyCredentials(accessToken, refreshToken, profile) {
    this.log.debug(`verifyCredentials: ${accessToken}, ${refreshToken}, ${JSON.stringify(profile)}`);
    return Promise.resolve({
      id: profile.username,
      accessToken: accessToken,
      githubProfile: profile
    });
  }
}

module.exports = AuthConfig;
