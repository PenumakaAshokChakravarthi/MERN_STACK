const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/mydb2'

const app  = express();

const userRoutes = require('./routes/userRoutes')

app.use(express.json())

// connect the database 
mongoose.connect(DB_URI).then(() => console.log('db connected')).catch((err) => {
    console.log('db connection error: ' + err)
})

app.get('/', (req, res) => {
    res.send('welcome from server side')
})

app.use('/user', userRoutes)

app.use((err, req, res, next) => {
    console.log('error: ' + err)
    res.status(500).send('internal server error')
})

app.listen(PORT, () => {
    console.log('server is running on ' + PORT)
})