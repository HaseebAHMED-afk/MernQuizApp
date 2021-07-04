const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    profileUrl:{
        type: String,
        requried: true
    },
    verifiedAccount:{
        type: Boolean,
        default: false
    },
    verificationCode:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('User' , userSchema )