const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.SENDERGMAIL, // Replace with your Gmail email address
    pass: process.env.SENDERPASSWORD, // Replace with your Gmail password or an app-specific password
  },
});

async function sendNotificationEmail(email, subject, message) {
  const mailOptions = {
    from: process.env.SENDERGMAIL,
    to: email,
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions)
    console.log(`Notification email sent to ${email}`);
  } catch (error) {
    console.error("Error sending notification email:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
}
module.exports = sendNotificationEmail;
