const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('admin home route')
})


router.get('/user', (req, res) => {
    res.send('admin for user')
})


router.get('/users', (req, res) => {
    res.send('admin  for users')
})


module.exports = router;