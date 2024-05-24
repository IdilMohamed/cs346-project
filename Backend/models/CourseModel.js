const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    universityName: { type: String, required: true },
    dateOfCourse: { type: String, required: true },
    courseLocation: { type: String, required: true },
    imagePath: { type: String, required: true },
}, { timestamps: true });



module.exports = mongoose.model('Course', courseSchema);