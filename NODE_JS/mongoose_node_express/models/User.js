const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim:true
    },
    age: {
        type: Number,
        require:true
    },
    phone: {
        type: Number,
        require:true
    },
    email: {
        type: String,
        unique:true
    }
});

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;