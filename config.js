System.config({
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.2.0",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.2.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.1",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.1",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.1",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.0",
    "bootstrap-sass": "github:twbs/bootstrap-sass@3.3.6",
    "devbridge-autocomplete": "npm:devbridge-autocomplete@1.2.24",
    "fetch": "github:github/fetch@0.11.0",
    "font-awesome": "npm:font-awesome@4.5.0",
    "jquery": "npm:jquery@2.2.3",
    "markdown": "npm:markdown@0.5.0",
    "moment": "npm:moment@2.13.0",
    "sanitize-html": "npm:sanitize-html@1.11.4",
    "text": "github:systemjs/plugin-text@0.0.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:abbrev@1.0.7": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.2.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-binding@1.0.0-beta.1.3.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-framework@1.0.0-beta.1.2.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.2.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.2.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-loader@1.0.0-beta.1.2.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-router@1.0.0-beta.1.2.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.2.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.2.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.1"
    },
    "npm:aurelia-templating@1.0.0-beta.1.2.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:devbridge-autocomplete@1.2.24": {
      "jquery": "npm:jquery@2.2.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:dom-serializer@0.1.0": {
      "domelementtype": "npm:domelementtype@1.1.3",
      "entities": "npm:entities@1.1.1"
    },
    "npm:domhandler@2.3.0": {
      "domelementtype": "npm:domelementtype@1.3.0"
    },
    "npm:domutils@1.5.1": {
      "dom-serializer": "npm:dom-serializer@0.1.0",
      "domelementtype": "npm:domelementtype@1.3.0"
    },
    "npm:entities@1.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:htmlparser2@3.9.0": {
      "domelementtype": "npm:domelementtype@1.3.0",
      "domhandler": "npm:domhandler@2.3.0",
      "domutils": "npm:domutils@1.5.1",
      "entities": "npm:entities@1.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:markdown@0.5.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nopt": "npm:nopt@2.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:nopt@2.1.2": {
      "abbrev": "npm:abbrev@1.0.7",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:sanitize-html@1.11.4": {
      "htmlparser2": "npm:htmlparser2@3.9.0",
      "regexp-quote": "npm:regexp-quote@0.0.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  },
  bundles: {
    "app-build.js": [
      "app.html!github:systemjs/plugin-text@0.0.3.js",
      "app.js",
      "home/home.html!github:systemjs/plugin-text@0.0.3.js",
      "home/home.js",
      "main.js",
      "markdown-wrapper/markdown-to-html.html!github:systemjs/plugin-text@0.0.3.js",
      "markdown-wrapper/markdown-to-html.js",
      "nav-bar.html!github:systemjs/plugin-text@0.0.3.js",
      "package/date-humanize.js",
      "package/package-service.js",
      "package/package.html!github:systemjs/plugin-text@0.0.3.js",
      "package/package.js",
      "search/search-bar.html!github:systemjs/plugin-text@0.0.3.js",
      "search/search-bar.js",
      "search/search-service.js",
      "search/suggestion-service.js"
    ],
    "aurelia.js": [
      "github:jspm/nodelibs-buffer@0.1.0.js",
      "github:jspm/nodelibs-buffer@0.1.0/index.js",
      "github:jspm/nodelibs-events@0.1.1.js",
      "github:jspm/nodelibs-events@0.1.1/index.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:jspm/nodelibs-stream@0.1.0.js",
      "github:jspm/nodelibs-stream@0.1.0/index.js",
      "github:jspm/nodelibs-util@0.1.0.js",
      "github:jspm/nodelibs-util@0.1.0/index.js",
      "github:systemjs/plugin-text@0.0.3.js",
      "github:systemjs/plugin-text@0.0.3/text.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.2.0.js",
      "npm:aurelia-animator-css@1.0.0-beta.1.2.0/aurelia-animator-css.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.1.js",
      "npm:aurelia-binding@1.0.0-beta.1.3.1/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0.js",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0.js",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0.js",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.2.0.js",
      "npm:aurelia-fetch-client@1.0.0-beta.1.2.0/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.1.js",
      "npm:aurelia-framework@1.0.0-beta.1.2.1/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.0.js",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-beta.1.2.0.js",
      "npm:aurelia-history@1.0.0-beta.1.2.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.0.js",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0.js",
      "npm:aurelia-loader@1.0.0-beta.1.2.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.0.js",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.0.js",
      "npm:aurelia-logging@1.0.0-beta.1.2.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.0.js",
      "npm:aurelia-metadata@1.0.0-beta.1.2.0/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.0.js",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.0.js",
      "npm:aurelia-pal@1.0.0-beta.1.2.0/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-beta.1.2.0.js",
      "npm:aurelia-path@1.0.0-beta.1.2.0/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.1.js",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.1/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0.js",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-beta.1.2.0.js",
      "npm:aurelia-router@1.0.0-beta.1.2.0/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.0.js",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.1.js",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.1/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/compile-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/compose.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/focus.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/hide.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/if.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/show.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/view-spy.js",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.1/with.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/router-view.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.1.js",
      "npm:aurelia-templating@1.0.0-beta.1.2.1/aurelia-templating.js",
      "npm:base64-js@0.0.8.js",
      "npm:base64-js@0.0.8/lib/b64.js",
      "npm:buffer@3.6.0.js",
      "npm:buffer@3.6.0/index.js",
      "npm:core-util-is@1.0.2.js",
      "npm:core-util-is@1.0.2/lib/util.js",
      "npm:devbridge-autocomplete@1.2.24.js",
      "npm:devbridge-autocomplete@1.2.24/dist/jquery.autocomplete.js",
      "npm:dom-serializer@0.1.0.js",
      "npm:dom-serializer@0.1.0/index.js",
      "npm:domelementtype@1.1.3.js",
      "npm:domelementtype@1.1.3/index.js",
      "npm:domelementtype@1.3.0.js",
      "npm:domelementtype@1.3.0/index.js",
      "npm:domhandler@2.3.0.js",
      "npm:domhandler@2.3.0/index.js",
      "npm:domhandler@2.3.0/lib/element.js",
      "npm:domhandler@2.3.0/lib/node.js",
      "npm:domutils@1.5.1.js",
      "npm:domutils@1.5.1/index.js",
      "npm:domutils@1.5.1/lib/helpers.js",
      "npm:domutils@1.5.1/lib/legacy.js",
      "npm:domutils@1.5.1/lib/manipulation.js",
      "npm:domutils@1.5.1/lib/querying.js",
      "npm:domutils@1.5.1/lib/stringify.js",
      "npm:domutils@1.5.1/lib/traversal.js",
      "npm:entities@1.1.1.js",
      "npm:entities@1.1.1/index.js",
      "npm:entities@1.1.1/lib/decode.js",
      "npm:entities@1.1.1/lib/decode_codepoint.js",
      "npm:entities@1.1.1/lib/encode.js",
      "npm:entities@1.1.1/maps/decode.json!github:systemjs/plugin-json@0.1.0.js",
      "npm:entities@1.1.1/maps/entities.json!github:systemjs/plugin-json@0.1.0.js",
      "npm:entities@1.1.1/maps/legacy.json!github:systemjs/plugin-json@0.1.0.js",
      "npm:entities@1.1.1/maps/xml.json!github:systemjs/plugin-json@0.1.0.js",
      "npm:events@1.0.2.js",
      "npm:events@1.0.2/events.js",
      "npm:htmlparser2@3.9.0.js",
      "npm:htmlparser2@3.9.0/lib/CollectingHandler.js",
      "npm:htmlparser2@3.9.0/lib/FeedHandler.js",
      "npm:htmlparser2@3.9.0/lib/Parser.js",
      "npm:htmlparser2@3.9.0/lib/ProxyHandler.js",
      "npm:htmlparser2@3.9.0/lib/Stream.js",
      "npm:htmlparser2@3.9.0/lib/Tokenizer.js",
      "npm:htmlparser2@3.9.0/lib/WritableStream.js",
      "npm:htmlparser2@3.9.0/lib/index.js",
      "npm:ieee754@1.1.6.js",
      "npm:ieee754@1.1.6/index.js",
      "npm:inherits@2.0.1.js",
      "npm:inherits@2.0.1/inherits_browser.js",
      "npm:isarray@0.0.1.js",
      "npm:isarray@0.0.1/index.js",
      "npm:isarray@1.0.0.js",
      "npm:isarray@1.0.0/index.js",
      "npm:jquery@2.2.3.js",
      "npm:jquery@2.2.3/dist/jquery.js",
      "npm:markdown@0.5.0.js",
      "npm:markdown@0.5.0/lib/index.js",
      "npm:markdown@0.5.0/lib/markdown.js",
      "npm:moment@2.13.0.js",
      "npm:moment@2.13.0/moment.js",
      "npm:process@0.11.2.js",
      "npm:process@0.11.2/browser.js",
      "npm:readable-stream@1.1.14/duplex.js",
      "npm:readable-stream@1.1.14/lib/_stream_duplex.js",
      "npm:readable-stream@1.1.14/lib/_stream_passthrough.js",
      "npm:readable-stream@1.1.14/lib/_stream_readable.js",
      "npm:readable-stream@1.1.14/lib/_stream_transform.js",
      "npm:readable-stream@1.1.14/lib/_stream_writable.js",
      "npm:readable-stream@1.1.14/passthrough.js",
      "npm:readable-stream@1.1.14/readable.js",
      "npm:readable-stream@1.1.14/transform.js",
      "npm:readable-stream@1.1.14/writable.js",
      "npm:regexp-quote@0.0.0.js",
      "npm:regexp-quote@0.0.0/regexp-quote.js",
      "npm:sanitize-html@1.11.4.js",
      "npm:sanitize-html@1.11.4/index.js",
      "npm:stream-browserify@1.0.0.js",
      "npm:stream-browserify@1.0.0/index.js",
      "npm:string_decoder@0.10.31.js",
      "npm:string_decoder@0.10.31/index.js",
      "npm:util@0.10.3.js",
      "npm:util@0.10.3/support/isBufferBrowser.js",
      "npm:util@0.10.3/util.js",
      "npm:xtend@4.0.1.js",
      "npm:xtend@4.0.1/immutable.js"
    ]
  },
  depCache: {
    "markdown-wrapper/markdown-to-html.js": [
      "aurelia-framework",
      "markdown/lib"
    ],
    "package/date-humanize.js": [
      "moment"
    ],
    "package/package-service.js": [
      "aurelia-framework",
      "aurelia-fetch-client",
      "fetch"
    ],
    "package/package.js": [
      "aurelia-framework",
      "./package-service"
    ],
    "search/search-bar.js": [
      "aurelia-framework",
      "aurelia-router",
      "jquery",
      "devbridge-autocomplete",
      "./search-service",
      "./suggestion-service"
    ],
    "search/search-service.js": [
      "aurelia-framework",
      "aurelia-fetch-client",
      "fetch"
    ],
    "search/suggestion-service.js": [
      "jquery",
      "devbridge-autocomplete",
      "sanitize-html"
    ]
  }
});