const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('users home route')
    // res.status(200).json({ message: 'users home route' })
})


// router.get('/address', (req, res) => {
//     console.log('users for address')
//     const a = 10;
//     const b = 30;
//     const c = a + b;
//     console.log(c);
//     res.send('users for address')
// })
router.get('/address', (req, res) => {
    res.send('users for address in GET API CALL')
})

router.post('/address',(req,res) => {
    res.send('users for address in POST API call')
})
router.put('/address',(req,res) =>{
    res.send('users for address in PUT API CALL')
})
router.delete('/address',(req,res) => {
    res.send('users for address in DELETE API CALL')
})
router.patch('/address',(req,res) => {
    res.send('users for address in PATCH API CALL')
})


module.exports = router;