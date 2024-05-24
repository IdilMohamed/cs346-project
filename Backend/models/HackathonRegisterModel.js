const mongoose = require('mongoose');

const courseRegisterSchema = new mongoose.Schema({
    hackathonId: { type: String, required: true },
    userId: { type: String, required: true },
}, { timestamps: true });



module.exports = mongoose.model('HackathonRegisterS', courseRegisterSchema);