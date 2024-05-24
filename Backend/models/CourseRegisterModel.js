const mongoose = require('mongoose');

const courseRegisterSchema = new mongoose.Schema({
    courseId: { type: String, required: true },
    userId: { type: String, required: true },
}, { timestamps: true });



module.exports = mongoose.model('CourseRegisterS', courseRegisterSchema);