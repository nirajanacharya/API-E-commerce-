
const authService = require ('./auth.service');
class AuthController {

    register =async (req,res,next)=>
        {
        
        try {

            let data = await authService.transformUserCreateData (req);

            //store user data in database

            await authService.createUser(data);

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