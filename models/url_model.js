
const mongoose = require('mongoose');

const URLSchma = mongoose.Schema({
    shortURL: {
        type: String,
        required: true,
       
    },
    originalURL: {
        type: String,
        required: true,
       
    },
    visitHistory: [
        {
            timestamp: {
                type: Date,
                default: Date.now
            }
        }
    ]
})
const URLModel = mongoose.model('URL',URLSchma);

module.exports = URLModel;