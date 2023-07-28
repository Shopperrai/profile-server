const express = require('express')
const app = express()
const port = 3000
const sendMail=require('./routes/SendMail')
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/send-mail',(req,res)=>{
    const recipientName = "Verma"; // Replace with the recipient's name
const senderName = "Abhishek"; // Replace with your name
const ReciverEmail = "abhishekverman3459@gmail.com";
const OfficalEmailAuth = process.env.AUTHGMAIL;
const subject = "Hello from Gmail using API";
const text = `Hello ${recipientName},\n\nThis is a dynamic email sent using the Backend. Feel free to customize the content as needed.\n\nBest regards,\n${senderName}`;

sendMail(recipientName, senderName, ReciverEmail, subject, text)
  .then((result) => console.log("Email sent...", result))
  .catch((error) => console.log("error:" + error.message));
})







app.listen(port, () => console.log(`Example app listening on port ${port}!`))