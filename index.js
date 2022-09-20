'use strict';

const express = require('express');
const notFound = require('./err-handlers/404');

console.log('helloooo')

const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('hey world hey')
});

app.get('/bad', (req, res, next) => {
  next('this route is no bueno');
});

app.use('*', notFound);

app.listen(3002);