const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('admin  for users home  route')
})


router.get('/user', (req, res) => {
    res.send('admin for user in GET API CALL')
})

router.post('/user',(req,res) => {
    res.send('admin for user in POST API call')
})
router.put('/user',(req,res) =>{
    res.send('admin for user in PUT API CALL')
})
router.delete('/user',(req,res) => {
    res.send('admin for user in DELETE API CALL')
})
router.patch('/user',(req,res) => {
    res.send('admin for user in PATCH API CALL')
})
router.get('/users', (req, res) => {
    res.send('admin  for users')
})


module.exports = router;