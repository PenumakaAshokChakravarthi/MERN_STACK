const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('users home route')
})


router.get('/categorie', (req, res) => {
    res.send('users in dashboard forcategorie in GET API CALL')
})

router.post('/categorie',(req,res) => {
    res.send('users in categorie for dashboard in POST API call')
})
router.put('/categorie',(req,res) =>{
    res.send('users in categorie for dashboard in PUT API CALL')
})
router.delete('/categorie',(req,res) => {
    res.send('users in categorie for dashboard in DELETE API CALL')
})
router.patch('/categorie',(req,res) => {
    res.send('users in categorie for dashboard in PATCH API CALL')
})

module.exports = router;