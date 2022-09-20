'use strict';

const express = require('express');
const notFound = require('./err-handlers/404');
const errorHandler = require('./err-handlers/500')
const stamper = require('./middleware/stamper');

const PORT = process.env.PORT || 3002

console.log('helloooo')

const app = express();

app.use(stamper);

app.get('/', (req, res, next) => {
  res.status(200).send('hey world hey')
});

app.get('/bad', (req, res, next) => {
  next('this route is no bueno');
});

app.get('/person', (req, res, next) => {
  let {personName} = req.query;

  try{
    if (personName){
      res.status(200).send(`${personName} is a person`);
    } else {
      res.status(200).send('There is a person and I do not know their name');
    } 
  } catch(err){
    next(err.message);
  }
});

app.use('*', notFound);

app.use(errorHandler);

function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));  
}

module.exports = {app, start};

