const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controllers');
const {signUpSchema, loginSchema} = require('../validators/auth-validator');
const validate = require('../middleware/validate-middleware')
const authMiddleware = require("../middleware/auth-middleware")

router.route("/").get(authControllers.home);

router.route("/register").post(validate (signUpSchema) ,authControllers.register);

router.route("/login").post(validate (loginSchema),authControllers.login);

router.route("/user").get(authMiddleware, authControllers.user);

module.exports = router;