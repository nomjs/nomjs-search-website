'use strict';

const Ravel = require('ravel');

const app = new Ravel();
require('ravel-github-oauth2-provider')(app);

app.registerSimpleParameter('github client id', true);
app.registerSimpleParameter('github client secret', true);
app.set('github client id', process.env.GITHUB_OAUTH_CLIENT_ID);
app.set('github client secret', process.env.GITHUB_OAUTH_CLIENT_SECRET);

// TODO Modify client build process to copy to server/public dir
app.set('koa public directory', '../public');

app.modules('./modules');
app.resources('./resources');

app.start();
