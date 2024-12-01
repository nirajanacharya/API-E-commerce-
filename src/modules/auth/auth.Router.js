
const authRouter = require('express').Router();
const {uploader}=require('../../middleware/multipart.middleware');

//controller
const authCtrl = require ('../auth/auth.controller')

//validation 
const {userRegistrationDTO, activateUserDTO,emailBodyDTO} = require('../auth/auth.validator');
const {bodyValidator} = require('../../middleware/validator.middleware');


authRouter.post('/register',uploader().single('image'),bodyValidator(userRegistrationDTO), authCtrl.register);
authRouter.put('/activate',bodyValidator(activateUserDTO), authCtrl.activateUser);
authRouter.post('/resend-otp',bodyValidator(emailBodyDTO), authCtrl.resendOtp);

module.exports = authRouter;    