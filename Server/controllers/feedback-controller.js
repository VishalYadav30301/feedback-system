const Feedback = require('../models/feedback-model');

const feedbackForm = async (req, res) => {
    try {
        const response = req.body;
        if (!response) {
            return res.status(400).json({ msg: "No data provided" });
        }
        await Feedback.create(response);
        return res.status(200).json({ msg: "Feedback form submitted successfully" });
    } catch (error) {
        console.error('Error submitting feedback form:', error);
        return res.status(500).json({ msg: "Feedback form not submitted", error: error.message });
    }
}

module.exports = feedbackForm;

