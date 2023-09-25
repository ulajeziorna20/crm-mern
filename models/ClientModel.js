const mongoose = require('mongoose');

const Client = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    nip: {
        type: String,
        required: true, 
        // unique: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Client', Client);