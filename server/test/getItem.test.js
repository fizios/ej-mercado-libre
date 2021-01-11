const request = require('supertest');
const express = require('express');
const sinon = require('sinon');
const assert = require('assert');

const app = express();
const setApiRoutes = require('../apiRoutes');
setApiRoutes(app);

const meliAPI = require('../api');
const mockItem = require('./mocks/item.json');
const mockDescription = require('./mocks/description.json');
const mockCategory = require('./mocks/category.json');


describe('[ BFF ] [ GET ITEM ]', () => {
  describe('[ Success 200 ]', () => {
    beforeAll(done => {
      // Mocks the request itself, returning a positive result always
      sinon.stub(meliAPI, 'getItem').returns(Promise.resolve(mockItem));
      sinon.stub(meliAPI, 'getItemDescription').returns(Promise.resolve(mockDescription));
      sinon.stub(meliAPI, 'getCategory').returns(Promise.resolve(mockCategory));
      done();
    });

    afterAll(done => {
      // Clean the Stub to set it again without errors
      meliAPI.getItem.restore();
      meliAPI.getItemDescription.restore();
      meliAPI.getCategory.restore();
      done();
    });

    it(`Verificar que el endpoint funcione`, done => {
      request(app)
        .get('/api/items/MLA899362191')
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


