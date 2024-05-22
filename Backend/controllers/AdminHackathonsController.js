const Hackathon = require('../models/HackathonModel');
const {faker, fakerAR} = require('@faker-js/faker');
const fs = require("fs");

const multer = require('multer');
const path = require('path');


const createData = async (req, res) => {

    try {
        // if (!req.session.userId) {
        //     req.flash('error', 'User not authenticated');
        //     return res.redirect('/'); // This causes a redirect
        // }


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


        const hackathonData2 = {
            name: req.body.name,
            universityName: req.body.universityName,
            dateOfEvent: req.body.dateOfEvent,
            eventLocation: req.body.eventLocation,
            imagePath: FilePathName
        };


        await Hackathon.create(hackathonData2);
        console.log(
            'Hackathon Data saved successfully'
        );
        req.flash('message', 'Hackathon Data saved successfully');
        return res.redirect('/admin'); // This might not be ideal for an API
    } catch (error) {
        console.log(error);
        req.flash('error', 'Error saving contact. Please try again.');
        return res.redirect('/admin');
    }
};


const updateData = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedContact = await Hackathon.findByIdAndUpdate(id, req.body, {new: true});
        if (!updatedContact) {
            return res.status(404).json({message: 'Contact not found'});
        }
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const getHackathonData = async (req, res) => {
    try {
        const theData = await Hackathon.find();

        const isAuth = req.session.useremail;
        return res.render('index', {
            theData: theData,
            title: 'الرئيسة',
            page_title: 'الرئيسة',
            currentRoute: 'index',
            layout: 'layouts/main',
            isAuth
        });

    } catch (error) {
        res.status(400).json({message: error.message});
    }
};
const getAdminHackathonData = async (req, res) => {
    try {
        const theData = await Hackathon.find();

        const isAuth = req.session.useremail;
        return res.render('admin/index', {
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
        const deletedContact = await Hackathon.findByIdAndDelete(id);
        if (!deletedContact) {
            return res.status(404).json({message: 'Contact not found'});
        }
        return res.redirect('/admin');
    } catch (error) {
        return res.redirect('/admin');
    }
};

module.exports = {createData, getAdminHackathonData, deleteData, getHackathonData, updateData};
