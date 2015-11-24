// Dependencies
const express = require('express');
const router = express.Router();


// Models
const Products = require('../models/products');

// routes
Products.methods(['get'], ['put'], ['post'], ['delete']);
Products.register(router, '/products');


// return router
module.exports = router;
