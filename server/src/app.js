'use strict';

const Ravel = require('ravel');

const app = new Ravel();

app.registerSimpleParameter('github oauth client id', true);
app.registerSimpleParameter('github oauth client secret', true);
app.set('github oauth client id', process.env.GITHUB_OAUTH_CLIENT_ID);
app.set('github oauth client secret', process.env.GITHUB_OAUTH_CLIENT_SECRET);

app.modules('./modules');
app.resources('./resources');

app.start();
