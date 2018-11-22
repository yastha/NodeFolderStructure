const mongoose = require('mongoose')
      Schema = mongoose.Schema;

//Defining the Schema
let userSchema = new Schema({
    firstName:{
        type: String,
        unique :true
    },
    lastName: {
        type: String,
        unique: true
    },
    userName: {
        type : String
    },
    email :{
        type: String
    },
    password:{
        type: String,
        required: [true,  'Password cannot be left blank']
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    is_deleted: {
        type: Boolean,
        default: false
    }

});

let User = mongoose.model('Users', userSchema);

module.exports = User;