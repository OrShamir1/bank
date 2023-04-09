const express = require('express');
const path = require('path');
const api = require('./routes/api');
const mongoose = require("mongoose");
app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', api)


mongoose.connect("mongodb://127.0.0.1:27017/BankDB", {
  useNewUrlParser: true,
}).catch((err)=> console.log(err))

const port = 3005
app.listen(port, function () {
    console.log(`Server running on ${port}`);
})