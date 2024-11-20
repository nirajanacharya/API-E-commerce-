const express = require('express');
const application = express.Router();
const productRouter = require('../modules/product/product.router')




// Routes
application.get('/health', (request, response) => {
    response.status(200).json({
        data: null,
        message: 'health route',
        code: "success",
        options: null
    });
});

application.use(productRouter);
// Error handling middleware
application.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({
        code: err.code || "error",
        message: err.message || "Something went wrong",
    });
});

module.exports = application;
