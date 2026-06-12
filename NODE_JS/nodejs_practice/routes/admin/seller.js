const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('admin home route')
})


router.get('/seller', (req, res) => {
    res.send('admin for seller')
})


router.get('/sellers', (req, res) => {
    res.send('admin  for sellers')
})


module.exports = router;