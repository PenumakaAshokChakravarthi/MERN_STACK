const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('sellers home route')
})


router.get('/product', (req, res) => {
    res.send('sellers for product')
})


router.get('/products', (req, res) => {
    res.send('sellers  for products')
})


module.exports = router;