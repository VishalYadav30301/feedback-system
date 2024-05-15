const {Schema, model} = require('mongoose');
const { required } = require('../validators/auth-validator');
const feedbackSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    },
});

const Feedback = new model('Feedback', feedbackSchema);

module.exports = Feedback;