const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create User Schema 
const AuthSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    data:{
        type: Date,
        default: Date.now
    }
})

module.exports = Auth = mongoose.model('auth', AuthSchema)