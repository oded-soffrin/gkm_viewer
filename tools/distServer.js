// This file configures a web server for testing the production build
// on your local machine.

import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import {chalkProcessing} from './chalkConfig';

/* eslint-disable no-console */

console.log(chalkProcessing('Opening production build...'));

// Run Browsersync
browserSync({
  port: 3000,
  ui: {
    port: 3001
  },
  server: {
    baseDir: 'dist'
  },

  files: [
    'src/*.html'
  ],

  middleware: [function(req, res, next) {
    if (req.url.startsWith('/admin/')) {
      req.url = '/admin.html';
    }

    if (req.url.startsWith('/instacelebs/')) {
      req.url = '/instacelebs.html';
    }
    next();
  },
    historyApiFallback()
  ]
});
