
const express = require('express');
const productRouter = express.Router();
const {checkLoggedIn} = require('../../middleware/auth.middleware');
const prodCtrl = require('./product.controller');
const{uploader} = require('../../middleware/multipart.middleware');

//validatin 

const {bodyValidator} = require('../../middleware/validator.middleware');
const {productAddDTO} = require('./product.validator')

productRouter.route('/product')
    .get(prodCtrl.getAllProducts)
    .post(checkLoggedIn,uploader().single('image'),bodyValidator(productAddDTO), prodCtrl.addProduct);
    
productRouter.route('/product/:id')
    .get(prodCtrl.getProductDetails)
    .patch(checkLoggedIn, prodCtrl.updateProductById)
    .delete(checkLoggedIn,prodCtrl.deleteProductById);

module.exports= productRouter;