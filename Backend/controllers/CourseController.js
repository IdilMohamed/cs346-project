const Course = require('../models/CourseModel');
const {faker, fakerAR} = require('@faker-js/faker');
const fs = require("fs");

const multer = require('multer');
const path = require('path');


const createData = async (req, res) => {

    try {
   

        var image = req.files.imagePath;
        var fileImagesPath = __dirname.replace('controllers', '') + 'uploads';

        if (!image) return res.sendStatus(400);
        if (!fs.existsSync(fileImagesPath)) {
            fs.mkdirSync(fileImagesPath, {recursive: true});
        }
        var FileName = Date.now() + '.jpg';
        fileImagesPath = fileImagesPath + '/' + FileName;
        var FilePathName = '/uploads/' + FileName;
        image.mv(fileImagesPath);


        const courseData = {
            name: req.body.name,
            universityName: req.body.universityName,
            dateOfCourse: req.body.dateOfCourse,
            courseLocation: req.body.courseLocation,
            imagePath: FilePathName
        };


        await Course.create(courseData);
        console.log(
            'Course Data saved successfully'
        );
        req.flash('message', 'Course Data saved successfully');
        return res.redirect('/course'); // This might not be ideal for an API
    } catch (error) {
        console.log(error);
        req.flash('error', 'Error saving Course. Please try again.');
        return res.redirect('/course');
    }
};


const updateData = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedContact = await Course.findByIdAndUpdate(id, req.body, {new: true});
        if (!updatedContact) {
            return res.status(404).json({message: 'Contact not found'});
        }
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const getCourseData = async (req, res) => {
    try {
        const theData = await Course.find();

        const isAuth = req.session.useremail;
        return res.render('index', {
            theData: theData,
            title: 'الرئيسة',
            page_title: 'الرئيسة',
            currentRoute: 'index',
            layout: 'layouts/main',
            isAuth,
            success_msg: req.flash('message'),
            error_msg: req.flash('error')
        });

    } catch (error) {
        res.status(400).json({message: error.message});
    }
};
const getAdminCourseData = async (req, res) => {
    try {
        const theData = await Course.find();

        const isAuth = req.session.useremail;
        return res.render('course/index', {
            theData: theData,
            title: 'الرئيسة',
            page_title: 'الرئيسة',
            currentRoute: 'index',
            layout: 'layouts/admin',
            isAuth
        });

    } catch (error) {
        res.status(400).json({message: error.message});
    }
};
const deleteData = async (req, res) => {
    console.log('Start Delete');
    try {
        var id = req.params.id;
        console.log(id);
        console.log( req.params)
        const deletedContact = await Course.findByIdAndDelete(id);
        if (!deletedContact) {
            return res.status(404).json({message: 'Contact not found'});
        }
        return res.redirect('/course');
    } catch (error) {
        return res.redirect('/course');
    }
};

module.exports = {createData, getAdminCourseData, deleteData, getCourseData, updateData};
