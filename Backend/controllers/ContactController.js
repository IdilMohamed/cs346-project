const Contact = require('../models/ContactModel');
const createContact = async (req, res) => {
    console.log('Any Thing');
    try {
        if (!req.session.userId) {
            req.flash('error', 'User not authenticated');
            return res.redirect('/index'); 
        }

        const contactData = {
 
            email: req.body.email,

            message: req.body.message,
            userId: req.session.userId
        };

        await Contact.create(contactData);
        console.log('Contact saved successfully');
        req.flash('message', 'Contact saved successfully');
        return res.redirect('/index'); // This might not be ideal for an API
    } catch (error) {
        console.log(error);
        req.flash('error', 'Error saving contact. Please try again.');
        return res.redirect('/index');
    }
};


//create 
//findByIdAndUpdate 
//findById 
//findByIdAndDelete
//find








const updateContact = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getContact = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findById(id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedContact = await Contact.findByIdAndDelete(id);
        if (!deletedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createContact, deleteContact, getContact, updateContact };
