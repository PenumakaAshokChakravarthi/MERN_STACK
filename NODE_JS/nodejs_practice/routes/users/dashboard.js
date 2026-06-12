const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('users home route')
})


router.get('/categories', (req, res) => {
    res.send('users for categories')
})


router.get('/categorie', (req, res) => {
    res.send('users  for categorie')
})


module.exports = router;