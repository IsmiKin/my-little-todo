"use strict";

var express = require("express");

var app = express();
app.get("/", function (req, res) {
  return res.status(200).send('pika');
});
module.exports = app;