const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name required']
    },
    email: {
        type: String,
        required: [true, 'email required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password required']
    }
},
    {
        timestamps: true
    })

    module.exports = mongoose.model('User', userSchema)