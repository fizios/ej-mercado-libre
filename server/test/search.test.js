const request = require('supertest');
const sinon = require('sinon');
const assert = require('assert');
const express = require('express');

const meliAPI = require('../api');
const app = express();

const setApiRoutes = require('../apiRoutes');
setApiRoutes(app);

const mockSearch = require('./mocks/search.json');
const mockCategory = require('./mocks/category.json');


describe('[ BFF ] [ SEARCH ]', () => {
  describe('[ Success 200 ]', () => {
    beforeAll(done => {
      // Mocks the request itself, returning a positive result always
      sinon.stub(meliAPI, 'search').returns(Promise.resolve(mockSearch));
      sinon.stub(meliAPI, 'getCategory').returns(Promise.resolve(mockCategory));
      done();
    });

    afterAll(done => {
      // Clean the Stub to set it again without errors
      meliAPI.search.restore();
      meliAPI.getCategory.restore();
      done();
    });

    it(`Verificar que el endpoint funcione`, done => {
      request(app)
        .get('/api/items?q=ipod')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it(`Verificar Autor`, done => {
      request(app)
        .get('/api/items?q=ipod')
        .set('Accept', 'application/json')
        .expect(200)
        .expect(res => {
          assert(res.body.author.name, "Mariano");
          assert(res.body.author.lastname, "Chaparro");
        })
        .end(done);
    });
  })
})


