
const express = require('express');
const productRouter = express.Router();
const {checkLoggedIn} = require('../../middleware/auth.middleware');
const prodCtrl = require('./product.controller');
const{uploader} = require('../../middleware/multipart.middleware');

productRouter.route('/product')
    .get(prodCtrl.getAllProducts)
    .post(checkLoggedIn,uploader().single('image'),prodCtrl.addProduct);
    
productRouter.route('/product/:id')
    .get(prodCtrl.getProductDetails)
    .patch(checkLoggedIn, prodCtrl.updateProductById)
    .delete(checkLoggedIn,prodCtrl.deleteProductById);

module.exports= productRouter;