'use strict';

const express = require('express');
const notFound = require('./err-handlers/404');

console.log('helloooo')

const app = express();

app.use('*', notFound);

app.listen(3002);