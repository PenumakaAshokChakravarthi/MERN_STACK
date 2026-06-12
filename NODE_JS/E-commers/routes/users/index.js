const express = require('express');
const router = express.Router();


// import routers
const AddressRouters = require('./address');
const dashboardRouter = require('./dashboard');
const ReviewsRouter = require('./reviews');

// use router
router.use(AddressRouters);
router.use(dashboardRouter);
router.use(ReviewsRouter);


module.exports = router