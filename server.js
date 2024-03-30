const app = require('./app');
const cloudinary = require('cloudinary');
const connectDatabase = require("./config/database");
const cors = require('cors')
app.use(cors())

//handling uncaught exception
// process.on("uncaughtException",(err)=>{
//     console.log(`Error: ${err.message}`);
//     console.log("Shutting down the server due to uncaught exception");
//     process.exit(1);
// })

//Config 
if(process.env.NODE_ENV!=="PRODUCTION"){
    require('dotenv').config({path:"config/config.env"});
}

// Connecting to database
connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

const currentPORT = process.env.NODE_ENV!=="PRODUCTION" ? 4000 : process.env.PORT

const server = app.listen(currentPORT, ()=> {
    console.log(`Server is working on http://localhost:${currentPORT}`);
});


//unhandled promise rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log("shutting down the server due to unhandled promise rejection");
    server.close(()=>{
        process.exit(1);
    });
})