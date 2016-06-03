'use strict';

const Ravel = require('ravel');
const Resource = Ravel.Resource;

class CurrentUserResource extends Resource {
  constructor() {
    super('/currentuser');
  }

  getAll(ctx) {
    let promise = new Promise((resolve, reject) => {
      if (ctx.req.isAuthenticated()) {
        resolve({user: ctx.req.user});
      } else {
        reject({message: 'no logged in user'});
      }
    });
    return promise.then(data => {
      ctx.status = 200;
      ctx.body = data;
    })
    .catch((err) => {
      ctx.status = 401;
      ctx.body = err;
    });
  }
}

module.exports = CurrentUserResource;
