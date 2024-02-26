const express = require("express");
const a = express();

a.get("/", (request, response) => {
  response.send("Home Page");
});

a.get("/about", (request, response) => {
  response.send("About Page");
});

module.exports = a;
