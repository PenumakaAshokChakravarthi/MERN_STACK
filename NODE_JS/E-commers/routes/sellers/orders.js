const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('sellers home route')
})


router.get('/order', (req, res) => {
    res.send('sellers for order in GET API CALL')
})

router.get('/orders', (req, res) => {
    res.send('sellers for orders in GET API CALL')
})

router.post('/order',(req,res) => {
    res.send('sellers for order in POST API call')
})
router.put('/order',(req,res) =>{
    res.send('sellers for order in PUT API CALL')
})
router.delete('/order',(req,res) => {
    res.send('sellers for order in DELETE API CALL')
})
router.patch('/order',(req,res) => {
    res.send('sellers for order in PATCH API CALL')
})


router.get('/orders', (req, res) => {
    res.send('sellers  for orders in GET API CALL')
})


module.exports = router;