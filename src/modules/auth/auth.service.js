const cloudinarySvc = require("../../services/cloudinary.service");
const {generateRandomString , generateMinutes } = require("../../Utilities/helper");
const bcrypt = require("bcryptjs");

class AuthService {
    generateOtp = () => {
        return {
            otp: generateRandomString(6).toUpperCase(),
            expiryOtp: generateMinutes(5)
        }
    }

    transformUserCreateData = async (req) => {
        try {
            let data = req.body;

            if (req.file) {
                data.image = await cloudinarySvc.uploadImage(req.file.path, '/users');
            }

            // manipulation
            data.password = bcrypt.hashSync(data.password, 10);
            data = {
                ...data,
                ...this.generateOtp()
            };
            data.status = "inactive";

            let { confirmPassword, ...userData } = data;
            return userData;
        } catch (exception) {
            throw exception;
        }
    }
}

const authService = new AuthService();
module.exports = authService;   