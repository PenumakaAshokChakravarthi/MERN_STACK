const express = require('express');
const router = express.Router();

const middleware1 = (req, res, next) => {
    console.log('middleware 1 executed');
    next();
}

router.use(middleware1);

router.get('/', (req, res) => {
    res.send('admin home  route')
})


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