const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleWare/catchAsyncErrors");

//Create Product -- Admin
exports.createProduct = catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product:product
    });
});

//Get all product
exports.getAllProducts = catchAsyncErrors(async(req,res)=>{

    const products = await Product.find();
    res.status(200).json({
        success:true,
        product:products
    });
});

//Get Product Details
exports.getProductDetails = catchAsyncErrors(async(req,res,next) => {
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product Not found",404));
    }

    res.status(200).json({
        success:true,
        message:"Product fetch successfully",
        product
    })
});

//Update product - Admin
exports.updateProduct = catchAsyncErrors(async(req,res,next)=> {
    let product = Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message: "Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false});
    res.status(200).json({
        success:true,
        product
    })
});

//Delete a Product 
exports.deleteProduct = catchAsyncErrors(async(req,res,next)=> {
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Prodcut not found"
        })
    }

    await product.remove();

    res.status(200).json({
        success:true,
        message:"Product deleted successfully"
    })
});