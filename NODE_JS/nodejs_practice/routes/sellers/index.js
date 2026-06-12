const express = require('express');
const router = express.Router();


// import routers
const OrderRouters = require('./orders');
const ProductRouter = require('./products');
const StockRouter = require('./stocks');

// use router
router.use(OrderRouters);
router.use(ProductRouter);
router.use(StockRouter);


module.exports = router