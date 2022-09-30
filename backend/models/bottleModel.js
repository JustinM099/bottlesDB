const mongoose = require('mongoose')

const bottleSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'text value required']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Bottle', bottleSchema)