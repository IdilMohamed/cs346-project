const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
    name: { type: String, required: true },
    universityName: { type: String, required: true },
    dateOfClub: { type: String, required: true },
    clubLocation: { type: String, required: true },
    imagePath: { type: String, required: true },
}, { timestamps: true });



module.exports = mongoose.model('Club', clubSchema);