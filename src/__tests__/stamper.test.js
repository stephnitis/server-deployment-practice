'use strict';

// const supertest = require('supertest');
// const {app} = require('../app');
// const request = supertest(app);

const stamper = require('../middleware/stamper');

describe('Stamper Middleware', () => {
  it('works as expected', async () => {

  // mock all the parameters needed for stamper to work properly
    let req = {};
    let res = {};
    let next = jest.fn();

  // call stamper, and we can confirm functionality
    stamper(req, res, next);

    expect(req.time).toBeTruthy();
    expect(next).toHaveBeenCalled();
  });
})