const cloudinarySvc= require('../../services/cloudinary.service')

class AuthController {

    register = (req,res,next)=>
        {
        
        try {
            let data = req.body;
            if(req.file){
                data.image =cloudinarySvc.uploadImage('req.file.path','users');

            }
            res.status(201).json({
                data:{data},
                message: 'User registered successfully',
                status: 'success'
            });
        }catch(exception){
            console.log("AuthController || user registration", exception);
            next(exception);
        }
    }
}

const authCtrl = new AuthController();

module.exports = authCtrl;