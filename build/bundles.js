module.exports = {
  "bundles": {
    "dist/app-build": {
      "includes": [
        "[app.js]",
        "[app.html!text]",
        "[nav-bar.html!text]",
        "[main.js]",
        "[*/**/*.js]",
        "*/**/*.html!text",
        "*/**/*.css!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": true,
        "rev": false
      }
    },
    "dist/aurelia": {
      "includes": [
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-fetch-client",
        "aurelia-router",
        "aurelia-animator-css",
        "aurelia-templating-binding",
        "aurelia-polyfills",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-loader-default",
        "aurelia-history-browser",
        "aurelia-logging-console",
        "text",
        "sanitize-html",
        "devbridge-autocomplete"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": false,
        "rev": false
      }
    }
  }
};
