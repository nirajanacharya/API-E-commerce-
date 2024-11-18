const express = require('express');
const application = express();

const checkLoggedIn = (req,res,next)=>{
    // console.log('checking if user is logged in');
    next({code:"unauthorized",message:"user is not logged in",status:401});
}

application.get('home',(request,response)=>{
    response.status(200).json({
        data:null,
        message:'home route',
        code: "sucess",
        options: null
    })
}); 

application.get('/user',(request,response)=>{
    response.status(200).json({
        data:null,
        message:'user route',
        code: "sucess",
        options: null
    })
});
application.post('/about-us',(request,response)=>{
    response.status(200).json({
        data:null,
        message:'about-us route',
        code: "sucess",
        options: null
    })
});

//product crude 


application.post('/product',checkLoggedIn,(request,response,next)=>{
   //login check
   //handle product create 
});

application.get('/product',(request,response)=>{
    //handling
    //returning all the product lists  
 });

application.get('/product/:id',(request,response)=>{
    //handling
    //returning the product details 
 });

 application.patch('/product/:id',checkLoggedIn,(request,response,next)=>{
    //handling
    //update the product details 
 });

 application.delete('/product/:id',checkLoggedIn,(request,response)=>{
    //handling
    //delete the product details 
 });



module.exports= application;