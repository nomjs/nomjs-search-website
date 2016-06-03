'use strict';

const Ravel = require('ravel');
const Resource = Ravel.Resource;

class CurrentUserResource extends Resource {
  constructor() {
    super('/currentuser');
  }

  // wip...
  getAll(ctx) {
    // Is there a passport one liner to get the currently logged in user?
    let sessionId = ctx.request.headers['koa.sid'];
    this.log.debug(sessionId);
    var promise = new Promise((resolve) => {
      resolve({username: 'foo'});
    });
    return promise.then(data => {
      ctx.status = 200;
      ctx.body = data;
    });
  }
}

module.exports = CurrentUserResource;
