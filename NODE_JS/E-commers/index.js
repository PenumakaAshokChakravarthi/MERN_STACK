const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 4000;

 app.get('/', (req, res) => {
   res.send('Hello World');
});
// Importing routes 


const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');
const sellerRoutes = require('./routes/sellers');

// Using routes
app.use('/users', userRoutes);
app.use('/admin', adminRoutes);
app.use('/seller', sellerRoutes);
// app.use((err, req, res, next) => {
//     res.status(500).json({status:false, "message":"internal server error"})
// })

//port access
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
});