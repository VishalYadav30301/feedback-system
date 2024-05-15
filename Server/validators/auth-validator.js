const {z} = require('zod');

const loginSchema = z.object({
    email: z.string({required_error:"Email is required"}).trim().email({message:"Invalid email address"}).min(3, {message:"Email must be at least 3 characters"}).max(255,{message:"Email must not exceed 255 charatcters"}),
    password: z.string({required_error:"password is required"}).min(7, {message:"password must be at least 7 characters"}).max(1024,{message:"password must not be greater than 1024 charatcters"}),
});


const signUpSchema =loginSchema.extend({
    username: z.string({required_error:"Name is required"}).trim().min(3, {message:"Name must be at least 3 characters"}).max(255,{message:"name must not exceed 255 charatcters"}),
    phone: z.string({required_error:"Phone is required"}).trim().min(10, {message:"Phone must be at least 10 characters"}).max(12,{message:"phone must not exceed 12 charatcters"}),
});

const feedbackSchema = z.object({
    username: z.string({required_error: "Name is required"})
        .trim()
        .min(3, {message: "Name must be at least 3 characters"})
        .max(255, {message: "Name must not exceed 255 characters"}),

    email: z.string({required_error: "Email is required"})
        .trim()
        .email({message: "Invalid email address"})
        .max(255, {message: "Email must not exceed 255 characters"}),

    feedback: z.string({required_error: "Feedback is required"})
        .trim()
        .min(4, {message: "Feedback must be at least 4 characters"})
        .max(255, {message: "Feedback must not exceed 255 characters"})
});


module.exports = {signUpSchema, loginSchema, feedbackSchema};