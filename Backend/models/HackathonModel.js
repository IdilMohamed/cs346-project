const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    universityName: { type: String, required: true },
    dateOfEvent: { type: String, required: true },
    eventLocation: { type: String, required: true },
    imagePath: { type: String, required: true },
}, { timestamps: true });



module.exports = mongoose.model('Hackathon', contactSchema);
