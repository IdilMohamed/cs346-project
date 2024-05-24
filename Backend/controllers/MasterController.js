const Hackathon = require('../models/HackathonModel');
const Course = require('../models/CourseModel');
const Club = require('../models/ClubModel');

const HackathonRegister = require('../models/HackathonRegisterModel');
const CourseRegister = require('../models/CourseRegisterModel');
const ClubRegister = require('../models/ClubRegisterModel');



const searchData = async (req, res) => {
    const query = req.query.query;

    try {
        const hackathons = await Hackathon.find({ name: { $regex: query, $options: 'i' } });
        const courses = await Course.find({ name: { $regex: query, $options: 'i' } });
        const clubs = await Club.find({ name: { $regex: query, $options: 'i' } });

        res.json({
            hackathons: hackathons,
            courses: courses,
            clubs: clubs
        });
    } catch (error) {
        console.error('Search error:', error);
        res.status(500).json({ message: 'Error processing search request' });
    }
};

const getMasterData = async (req, res) => {
    try {
        const userId = req.session.userId;
        const theData = await Hackathon.find();
        const theCourse = await Course.find();
        const theClub = await Club.find();

        // Check for existing registrations
        const registeredHackathons = await HackathonRegister.find({ userId }).select('hackathonId');
        const registeredCourses = await CourseRegister.find({ userId }).select('courseId');
        const registeredClubs = await ClubRegister.find({ userId }).select('clubId');

        const registeredHackathonIds = registeredHackathons.map(r => r.hackathonId);
        const registeredCourseIds = registeredCourses.map(r => r.courseId);
        const registeredClubIds = registeredClubs.map(r => r.clubId);

       // const isAuth = req.session.useremail;
        const isAuth = !!req.session.userId; 
        return res.render('index', {
            theData: theData,
            theCourse: theCourse,
            theClub: theClub,
            title: 'الرئيسة',
            page_title: 'الرئيسة',
            currentRoute: 'index',
            layout: 'layouts/main',
            isAuth,
            success_msg: req.flash('message'),
            error_msg: req.flash('error'),
            registeredHackathonIds,
            registeredCourseIds,
            registeredClubIds
        });

    } catch (error) {
        res.status(400).json({message: error.message});
    }
};



const registerData = async (req, res) => {
    const { id, name, type } = req.body;
    const userId = req.session.userId;

    try {
        let existingRegistration;
        if (type === 'hakathon') {
            existingRegistration = await HackathonRegister.findOne({ hackathonId: id, userId: userId });
            if (!existingRegistration) {
                const hakathonData = {
                    hackathonId: id,
                    userId: userId
                };
                await HackathonRegister.create(hakathonData);
            }
        } else if (type === 'course') {
            existingRegistration = await CourseRegister.findOne({ courseId: id, userId: userId });
            if (!existingRegistration) {
                const courseData = {
                    courseId: id,
                    userId: userId
                };
                await CourseRegister.create(courseData);
            }
        } else if (type === 'club') {
            existingRegistration = await ClubRegister.findOne({ clubId: id, userId: userId });
            if (!existingRegistration) {
                const clubData = {
                    clubId: id,
                    userId: userId
                };
                await ClubRegister.create(clubData);
            }
        } else {
            return res.status(400).json({
                title: "فشل التسجيل",
                text: `نوع التسجيل غير صالح: ${type}`,
                icon: "error"
            });
        }

        if (existingRegistration) {
            return res.json({
                title: "تم التسجيل مسبقًا",
                text: `لقد قمت بالفعل بالتسجيل في ${name}.`,
                icon: "info"
            });
        }

        res.json({
            title: "تم التسجيل بنجاح",
            text: `لقد تم تسجيلك في ${name} بنجاح.`,
            icon: "success"
        });

    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({
            title: "فشل التسجيل",
            text: "حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.",
            icon: "error"
        });
    }
};


module.exports = {getMasterData,registerData,searchData};
