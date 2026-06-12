const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('sellers home route')
})


router.get('/stock', (req, res) => {
    res.send('sellers for stock in GET API CALL')
})

router.post('/stock',(req,res) => {
    res.send('sellers for stock in POST API call')
})
router.put('/stock',(req,res) =>{
    res.send('sellers for stock in PUT API CALL')
})
router.delete('/stock',(req,res) => {
    res.send('sellers for stock in DELETE API CALL')
})
router.patch('/stock',(req,res) => {
    res.send('sellers for stock in PATCH API CALL')
})

// router.get('/inventory', (req, res) => {
//     res.send('sellers  for inventory')
// })


module.exports = router;