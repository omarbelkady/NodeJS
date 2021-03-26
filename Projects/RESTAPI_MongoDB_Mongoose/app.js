const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const theProductRoutes = require('./api/routes/products');
const theOrderRoutes = require('./api/routes/orders');

mongoose.connect('mongodb+srv://cluster0.p4rih.mongodb.net/myFirstDatabase')
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (request.method === 'OPTIONS') {
        response.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return response.status(200).json({});
    }
    next();
  });
  
  // Routes For Handling My requests
  app.use('/products', theProductRoutes);
  app.use('/orders', theOrderRoutes);
  
  app.use((request, response, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
  app.use((error, request, response, next) => {
    response.status(error.status || 500);
    response.json({
      error: {
        message: error.message
      }
    });
  });
  
  module.exports = app;