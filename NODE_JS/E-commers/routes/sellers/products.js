const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('sellers home route')
})


router.get('/product', (req, res) => {
    res.send('sellers for product in GET API CALL')
})

router.post('/product',(req,res) => {
    res.send('sellers for product in POST API call')
})
router.put('/product',(req,res) =>{
    res.send('sellers for product in PUT API CALL')
})
router.delete('/product',(req,res) => {
    res.send('sellers for product in DELETE API CALL')
})
router.patch('/product',(req,res) => {
    res.send('sellers for product in PATCH API CALL')
})


// router.get('/products', (req, res) => {
//     res.send('sellers  for products')
// })


module.exports = router;