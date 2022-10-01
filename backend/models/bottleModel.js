const mongoose = require('mongoose')

//TODO: update model with all fields required. current model is incomplete and only for development
const bottleSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'text value required']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Bottle', bottleSchema)