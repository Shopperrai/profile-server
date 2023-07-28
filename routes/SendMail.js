const nodemailer = require("nodemailer");
const { google } = require("googleapis");
// These id's and secrets should come from .env file.
// make your own and then add these to .env variable
const CLIENT_ID = process.env.CLIENT_ID;
const CLEINT_SECRET = process.env.CLEINT_SECRET;
const AUTHGMAIL = 'abhishekverma3459@gmail.com';
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const sendingTime = Date.now().toString;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(
  recipientName,
  senderName,
  ReciverEmail,
  subject,
  text,
  OfficalEmailAuth = AUTHGMAIL
) {
  try {
    // Check if the access token is expired or not available
    if (!oAuth2Client.credentials || oAuth2Client.isTokenExpiring()) {
      // Fetch a new access token using the refresh token
      const { tokens } = await oAuth2Client.refreshAccessToken();
      oAuth2Client.setCredentials(tokens);
    }

    const accessToken = 'ya29.a0AbVbY6OlCltMuq4IxAHgsjLw-Nim07CWSKZcolezw4xZ5-EU6egKP1tytUgxqcCoHo7pUiRcxKaSKzef_ZagpDpCjSiMya564HUtrCkIqHp-Ngbjq3pBHmtcwgMt9ZngejEvlgs9TQOz1o7VhySuDVuLRKni5yoaCgYKARcSARISFQFWKvPlqlAKerZGOxniLlNqhc8nXw0166'

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: AUTHGMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const mailOptions = {
      from: `"${senderName}" <${OfficalEmailAuth}>`,
      to: ReciverEmail, // Replace with the recipient's email address
      subject: subject,
      text: text,
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello from Shopper.AI! ${sendingTime} </title>
        <style>
          /* Your custom styles here */
      
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
          }
      
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 40px;
            background-color: #ffffff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
      
          h1 {
            color: #333333;
            margin-bottom: 20px;
            animation: fadeInUp 1s ease-in-out;
          }
      
          p {
            font-size: 16px;
            line-height: 1.6;
            color: #333333;
            margin-bottom: 10px;
            animation: fadeInUp 1s ease-in-out;
          }
      
          .footer {
            font-size: 14px;
            color: #888888;
            text-align: center;
            margin-top: 20px;
          }
      
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1 style="animation-delay: 0.2s;">Hello ${recipientName} ${sendingTime} Your are Our Subscriber ✋✋,</h1>
          <p style="animation-delay: 0.4s;">We are excited to share the latest updates 🗞🗞 from Shopper.AI!</p>
          <p style="animation-delay: 0.6s;">Currently This Email is Generated Using my personal email but it will be changed to shopper.ai soon.</p>
          <p style="animation-delay: 0.8s;">Our Producd is Launching 🚀🚀🚀 soon </p>
          <p style="animation-delay: 1s;">Best regards,<br>Shopper.AI Team</p>
        </div>
        <div class="footer">
          <p>This email is sent using the Backend Route So Dont Take it serously it just for testing Purpose.</p>
        </div>
      </body>
      </html>
      
      `,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}
// // example use case
// const recipientName = "Verma"; // Replace with the recipient's name
// const senderName = "Abhishek"; // Replace with your name
// const ReciverEmail = "abhishekverman3459@gmail.com";
// const OfficalEmailAuth = AUTHGMAIL;
// const subject = "Hello from Gmail using API";
// const text = `Hello ${recipientName},\n\nThis is a dynamic email sent using the Backend. Feel free to customize the content as needed.\n\nBest regards,\n${senderName}`;

// sendMail(recipientName, senderName, ReciverEmail, subject, text)
//   .then((result) => console.log("Email sent...", result))
//   .catch((error) => console.log("error:" + error.message));

module.exports = sendMail;
