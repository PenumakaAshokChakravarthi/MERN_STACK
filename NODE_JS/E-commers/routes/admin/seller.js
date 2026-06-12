const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('admin  for seller home route')
})


router.get('/seller', (req, res) => {
    res.send('admin seller for seller API CALL')
})


router.get('/seller', (req, res) => {
    res.send('admin seller route  in GET  API CALL')
})

router.put('/seller', (req, res) => {
    res.send('admin for seller route in PUT API CALL')
})


router.delete('/seller', (req, res) => {
    res.send('admin for seller route in DELETE API CALL')
})
router.post('/seller', (req, res) => {
    res.send('admin for seller route in POST API CALL')
})


router.patch('/seller', (req, res) => {
    res.send('admin sellers route in PATCH API CALL')
})


module.exports = router;