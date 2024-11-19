
const checkLoggedIn = (req, res, next) => {
    // Replace with actual authentication logic
     // const isLoggedIn = false; // Mock condition
    // if (!isLoggedIn) {
    //     next({ code: "unauthorized", message: "User is not logged in", status: 401 });
    // } else {
    //    next();
    // }

    next();
};

module.exports = {checkLoggedIn};