const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('sellers home route')
})


router.get('/order', (req, res) => {
    res.send('sellers for order')
})


router.get('/orders', (req, res) => {
    res.send('sellers  for orders')
})


module.exports = router;