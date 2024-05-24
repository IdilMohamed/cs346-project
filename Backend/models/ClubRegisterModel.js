const mongoose = require('mongoose');

const clubRegisterSchema = new mongoose.Schema({
    clubId: { type: String, required: true },
    userId: { type: String, required: true },
}, { timestamps: true });



module.exports = mongoose.model('ClubRegisterS', clubRegisterSchema);