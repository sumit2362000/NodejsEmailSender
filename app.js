//email send: 
const mailer = require('nodemailer');
let transport = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sumit2362000@gmail.com',
        pass: 'Sumit@4562'
    }
})
let messageOb = {
    from: 'sumit2362000@gmail.com',
    to: 'sumitd2362000@gmail.com',
    subject: 'Email using NODE JS',
    text: 'this mail is send using node js',
};

transpor.sendMail(messageOb, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent");
        console.log(info.response);
    }
});