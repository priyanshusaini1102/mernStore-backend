const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleWare/catchAsyncErrors");

const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");

//Register a User
exports.registerUser = catchAsyncErrors(async(req,res,next)=> {

    const {name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar : {
            public_id : "this is a sample id",
            url: "profilepicurl"
        }
    });
    
    sendToken(user,201,res);
})

//login user
exports.loginUser = catchAsyncErrors(async(req,res,next)=>{
    const {email, password} = req.body;

    //checking if user has given password and email both

    if(!email || !password){
        return next(new ErrorHandler("Please enter email and password",400));
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid email or password",401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",401));
    }

    sendToken(user,200,res);
})

//logout user
exports.logout = catchAsyncErrors(async(req,res,next)=>{

    res.cookie("token",null,{
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "Logged Out"
    })
})

//forgot password
exports.forgotPassword = catchAsyncErrors(async(req,res,next)=>{
    const user = await User.findOne({email: req.body.email});

    if(!user){
        return next(new ErrorHandler("User not found", 404));

    }

    //get Resetpassword token
    const resetToken = user.getResetPasswordToken();

    await user.save({validateBeforeSave: false});

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\n if you have not requested this email then please ignore it.`;

    try{
        await sendEmail({
            email: user.email,
            subject: `ecommerce password recovery`,
            message
        });

        res.status(200).json({
            success:true,
            message: `email sent to ${user.email} successfully.`
        })

    }catch(err){
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({validateBeforeSave: false});

        return next(new ErrorHandler(err.message,500));

    }

});