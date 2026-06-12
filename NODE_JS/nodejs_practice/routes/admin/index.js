const express = require('express');
const router = express.Router();


// import routers
const ProductRouters = require('./product');
const sellerRouter = require('./seller');
const UserRouter = require('./user');

// use router
router.use(ProductRouters);
router.use(sellerRouter);
router.use(UserRouter);


// barrel importing 
// barrel file 

module.exports = router