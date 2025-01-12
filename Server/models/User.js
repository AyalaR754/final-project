const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true

    },
    password:
    {
        type: String,
        required: true,
    },
    username:
    {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    email:
    {
        type: String,
        required: true,
        lowercase: true,
        trime: true
    },

    phone: {
        type: String,
        maxLength: 10
    },
    roles: {
        type: String,
        enum: ['User', 'Admin'],
        defult: 'user'
    },
    confirm: {
        type: Boolean
    }

}, {})


module.exports = mongoose.model("User", userSchema)