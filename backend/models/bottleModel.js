const mongoose = require('mongoose')

//TODO: update model with all fields required. current model is incomplete and only for development
const bottleSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    producer: {
        type: String,
        required: [true, 'producer value required']
    },
    vintage: {
        type: Number,
    },
    wineName: {
        type: String
    },
    variety: {
        type: String
    },
    region: {
        type: String
    },
    quantity: {
        type: Number,
        min: 0
    },
    notes: {
        type: String
    },
    location: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Bottle', bottleSchema)