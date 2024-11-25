
const authRouter = require('express').Router();
const {uploader}=require('../../middleware/multipart.middleware');

//controller
const authCtrl = require ('../auth/auth.controller')

//validation 
const userRegistrationDTO = require('../auth/auth.validator');
const {bodyValidator} = require('../../middleware/validator.middleware');


authRouter.post('/register',uploader().single('image'),bodyValidator(userRegistrationDTO), authCtrl.register);

module.exports = authRouter;    