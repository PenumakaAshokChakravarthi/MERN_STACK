const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('users home route')
})


router.get('/reviews', (req, res) => {
    res.send('users for reviews')
})


router.get('/review', (req, res) => {
    res.send('users  for review')
})


module.exports = router;