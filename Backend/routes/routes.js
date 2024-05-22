const express = require('express');
const route = express.Router();
const AuthController = require("../controllers/AuthController");
const ContactController = require("../controllers/ContactController");
const HackathonsController = require("../controllers/AdminHackathonsController");


const {publicDecrypt} = require("crypto");  // Ensure this path is correct
var fs = require('fs');

module.exports = function (app) {
    app.use((req, res, next) => {
        const uemail = req.session.useremail;
        const allowedPublicUrls = ["/index",  "/auth-validate", "/signup", "/error"];
        const allowedAuthenticatedUrls = [...allowedPublicUrls];
      
    
      
        if (allowedPublicUrls.indexOf(req.path) !== -1) {
          return next();
        } else if (uemail) {
          return next();
        } else {
          return res.redirect('/index'); 
        }
    });




    app.get('/', HackathonsController.getHackathonData);
    app.get('/index', HackathonsController.getHackathonData);

    app.get('/admin', HackathonsController.getAdminHackathonData);
    app.get('/user', AuthController.getUserData);
    app.get('/delete-hackathon/:id', HackathonsController.deleteData);


    app.get('/delete-user/:id', AuthController.deleteData);


    app.post('/save-hackathon', HackathonsController.createData);
    app.get('/add-hackathon', (req, res) => {
        const isAuth = req.session.useremail;
        res.render('admin/add', {
            title: 'اضافة هاكاثون',
            page_title: 'الخدمات',
            layout: 'layouts/admin',
            isAuth
        });
    });


    app.get('/add-user', (req, res) => {
        const isAuth = req.session.useremail;
        res.render('user/add', {
            title: 'اضافة مستحدم',
            page_title: 'الخدمات',
            layout: 'layouts/admin',
            isAuth
        });
    });


    app.post('/auth-validate', AuthController.validate);

    app.get('/logout', AuthController.logout);

    app.get('/register', (req, res) => {
        res.render('auth/register', {
            title: 'Register',
            layout: 'layouts/layout-auth',
            message: req.flash('message'),
            error: req.flash('error')
        });
    });

    app.post('/signup', AuthController.signup);

};
