"use strict";

var request = require("supertest");

var app = require("../src/app");

describe("GET /", function () {
  it("dummy test", function () {
    expect(true).toBe(true);
  });
  it("respond with something", function (done) {
    request(app).get('/').then(function (response) {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});