class ProductController {
     getAllProducts =(request, response) => {
        response.status(200).json({
            data: null,
            message: 'Product details',
            code: "success"
        })
        };
    
         updateProductById = (request, response) => {
            response.status(200).json({
                data: null,
                message: 'Product updated',
                code: "success"
            })
            };
    
         deleteProductById = (request, response) => {
            response.status(200).json({
                data: null,
                message: 'Product deleted',
                code: "success"
            })
        };
    
}

const prodCtrl = new ProductController();
module.exports = prodCtrl;
