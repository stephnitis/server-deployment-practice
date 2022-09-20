'use strict';

const express = require('express');
const notFound = require('./err-handlers/404');
const errorHandler = require('./err-handlers/500')

console.log('helloooo')

const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('hey world hey')
});

app.get('/bad', (req, res, next) => {
  next('this route is no bueno');
});

app.use('*', notFound);

app.use(errorHandler);

app.listen(3002);