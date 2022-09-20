'use strict';

const { describe, it } = require('eslint/lib/rule-tester/rule-tester');
const supertest = require('supertest');
const {app} = require('../app');
const request = supertest(app);

describe('API Server', () => {
  it('handles invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status)
  })
})