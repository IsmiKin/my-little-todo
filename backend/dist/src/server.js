"use strict";

var app = require('./app');

var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Starting server on port ".concat(PORT));
});