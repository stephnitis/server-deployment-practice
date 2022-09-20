'use strict';

const supertest = require('supertest');
const {app} = require('../app');
const request = supertest(app);

describe('API Server', () => {

  it('handles invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });

  it('handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
    expect(response.body.message).toEqual('this route is no bueno');
  });

  it('handles root path', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('hey world hey');
  });

  it('handles \'/person\' route without query param correctly', async ()=> {
    const response = await request.get('/person');

    expect(response.test).toEqual('There is a person and I do not know their name');
  });

  it('handles \'/person\' route with query param correctly', async () => {
    const response = await request.get('/person').query({personName: 'Human Name'});

    expect(response.test).toEqual('Human Name is a person');
  });
});