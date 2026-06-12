const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('users home route')
})


router.get('/review', (req, res) => {
    res.send('users in review in GET API CALL')
})

router.post('/review',(req,res) => {
    res.send('users in review in POST API call')
})
router.put('/review',(req,res) =>{
    res.send('users in review in PUT API CALL')
})
router.delete('/review',(req,res) => {
    res.send('users in review in DELETE API CALL')
})
router.patch('/review',(req,res) => {
    res.send('users in review in PATCH API CALL')
})

module.exports = router;