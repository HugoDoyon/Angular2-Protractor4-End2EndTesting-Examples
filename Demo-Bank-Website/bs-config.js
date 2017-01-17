'use strict';
var fallback = require('connect-history-api-fallback');
var log = require('connect-logger');
/*
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 */
module.exports = {
  injectChanges: false, // workaround for Angular 2 styleUrls loading
  files: ['./**/*.{html,htm,css,js}'],
  watchOptions: {
    ignored: 'node_modules'
  },
 ghostMode: false,
  server: {
    baseDir: './',
    middleware: [
      log({ format: '%status %method %url' }),
      fallback({
        index: '/index.html',
        htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'] // systemjs workaround
      })
    ]
  }
};
