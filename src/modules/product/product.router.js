
const express = require('express');
const productRouter = express.Router();
const {checkLoggedIn} = require('../../middleware/auth.middleware');
const prodCtrl = require('./product.controller');


productRouter.route('/product/:id')
    .get(prodCtrl.getAllProducts)
    .patch(checkLoggedIn, prodCtrl.updateProductById)
    .delete(checkLoggedIn,prodCtrl.deleteProductById);

module.exports= productRouter;