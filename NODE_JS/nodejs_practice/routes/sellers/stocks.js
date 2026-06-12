const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('sellers home route')
})


router.get('/stock', (req, res) => {
    res.send('sellers for stock')
})


router.get('/inventory', (req, res) => {
    res.send('sellers  for inventory')
})


module.exports = router;