const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('users home route')
    // res.status(200).json({ message: 'users home route' })
})


router.get('/address', (req, res) => {
    console.log('users for address')
    const a = 10;
    const b = 30;
    const c = a + b;
    console.log(c);
    res.send('users for address')
})


router.get('/addresss', (req, res) => {
    res.send('users  for orders')
})


module.exports = router;