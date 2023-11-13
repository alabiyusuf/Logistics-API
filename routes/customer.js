const express = require('express');
const route = express.Router();

const customerOnly = require('../utils/customerOnly');
const isUserLoggedIn = require('../utils/isUserLoggedIn');

const newShipping = require('../controllers/shipping/newShipping');
const fetchAllOrders = require('../controllers/shipping/fetchAll');

route.use(isUserLoggedIn);
route.use(customerOnly);

// Route to create a new shipping request
route.post('/request-service', newShipping);

// Get all shipping requests made by the customer
route.get('/get-shippings', fetchAllOrders);

module.exports = route;
