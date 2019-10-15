'use strict';

let compression = require('compression');
let express = require('express');
let logger = require('morgan');
let http = require('http');
let path = require('path');
let proxy = require('http-proxy-middleware');

let app = express();

app.set('port', process.env.PORT || 8080);
app.set('hxe-host', process.env.HXE_HOST || 'hxehost');
app.set('hxe-port', process.env.HXE_PORT | 51006);

app.use(compression());
app.use(logger('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// proxy for HANA Express REST api
app.use(
  '/api/*',
  proxy({
    target: `https://${app.get('hxe-host')}:${app.get('hxe-port')}`,
    secure: false,
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: {
      '^/api': ''
    }
  })
);

app.use('*', function (req, res) {

  // respond with index to process links
  if (req.accepts('html')) {
    res.sendFile(__dirname + '/dist/index.html');
    return;
  }

  // otherwise resource was not found
  res.status(404);
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  res.type('txt').send('Not found');
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
