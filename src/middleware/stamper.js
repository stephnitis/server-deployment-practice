'use strict';



const stamper = (req, res, next) => {
  let time = Date.now();
  console.log('time', time);
  req.time = time;
  next();
};

module.exports = stamper;