const Contact = require('../models/contact-models');
const contactForm = async (req, res) =>{
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({msg: "Contact form submitted succesfully"});
    } catch (error) {
        return res.status(500).json({msg: "Contact form not submitted "});
    }
};

module.exports = contactForm;