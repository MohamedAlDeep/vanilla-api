const express = require('express');

const api = express();
api.use(express.static('public'));

api.listen(3000, ()=> {
  console.log("api is up and running ")
})