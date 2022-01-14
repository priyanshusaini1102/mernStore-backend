const nodemailer = require('nodemailer');

const sendEmail = async(options)=> {

    const transporter = nodemailer.createTransport({
        service: process.env.SMPT_SERVICE,
        auth: {
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASSWORD
        }
    });
    const mailOptions = { 
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message
    };

    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });

    const info = await transporter.sendMail(mailOptions);

}

module.exports = sendEmail;