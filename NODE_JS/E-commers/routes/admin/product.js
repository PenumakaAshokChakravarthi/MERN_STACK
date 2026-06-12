const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('admin home  for product route')
})


router.get('/product', (req, res) => {
    res.send('admin for product route GET API CALL')
})


router.get('/products', (req, res) => {
    res.send('admin products route  in GET  API CALL')
})

router.put('/product', (req, res) => {
    res.send('admin for product route in PUT API CALL')
})


router.delete('/product', (req, res) => {
    res.send('admin for product route in DELETE API CALL')
})
router.post('/product', (req, res) => {
    res.send('admin for product route in POST API CALL')
})


router.patch('/product', (req, res) => {
    res.send('admin products route in PATCH API CALL')
})

module.exports = router;