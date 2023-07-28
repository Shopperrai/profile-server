// NewsletterSubscriber Routes
const express = require("express");
const router = express.Router();
const NewsletterSubscriber = require("../models/NewsletterSubscriber");

const sendMail = require("./SendMail");
// Route to send notification email
router.post("/send-notification", async (req, res) => {
  try {
    const { email, subject, message } = req.body;
    await sendNotificationEmail(email, subject, message);
    res.status(200).json({ message: "Notification email sent successfully." });
  } catch (err) {
    res.status(500).json({ error: "Failed to send notification email." });
  }
});

// Subscribe to the newsletter

router.post("/send-mail", (req, res) => {
  const { recipientName, senderName, ReciverEmail, subject, text } = req.body;
  sendMail(recipientName, senderName, ReciverEmail, subject, text)
    .then((result) => res.json({ "Email sent...": result }))
    .catch((error) => console.log("error:" + error.message));
});

router.post("/newsletter-subscribers", async (req, res) => {
  try {
    const { recipientName, senderName, ReciverEmail, subject, text } = req.body;
    const OfficalEmailAuth = process.env.AUTHGMAIL;

    const subscribers = await NewsletterSubscriber.find({
      email: ReciverEmail,
    });
    if (subscribers.length != 0) {
      res.status(200).json("Already Subscribed ");
      return;
    }

    const newsubscriber = await NewsletterSubscriber.create({
      email: ReciverEmail,
    });

    if (newsubscriber) {
      sendMail(recipientName, senderName, ReciverEmail, subject, text)
        .then((result) => {
          console.log("Email sent...", result);
        })
        .catch((error) => console.log("error:" + error.message));
    }
    res.status(200).json(newsubscriber);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Failed to subscribe to the newsletter" });
  }
});

// Get all newsletter subscribers
router.get("/newsletter-subscribers", async (req, res) => {
  try {
    const subscribers = await NewsletterSubscriber.find();
    if (subscribers.length == 0) res.status(200).json("No Subscriber Yet");
    else res.json(subscribers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch newsletter subscribers." });
  }
});

// Unsubscribe from the newsletter
router.delete("/newsletter-subscribers/:id", async (req, res) => {
  try {
    const subscriberId = req.params.id;
    await NewsletterSubscriber.findByIdAndDelete(subscriberId);
    res.json({ message: "Unsubscribed from the newsletter." });
  } catch (err) {
    res
      .status(400)
      .json({ error: "Failed to unsubscribe from the newsletter." });
  }
});
module.exports = router;
