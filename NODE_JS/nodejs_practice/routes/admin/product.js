const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('admin home route')
})


router.get('/product', (req, res) => {
    res.send('admin for product')
})


router.get('/products', (req, res) => {
    res.send('admin  for products')
})


module.exports = router;