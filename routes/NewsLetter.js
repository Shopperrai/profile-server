// NewsletterSubscriber Routes
const express = require("express");
const router = express.Router();
const NewsletterSubscriber = require("../models/NewsletterSubscriber");
const sendNotificationEmail = require("./EmailSender");
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
router.post("/newsletter-subscribers", async (req, res) => {
  try {
    const { email } = req.body;
    const subscriber = await NewsletterSubscriber.create({ email });
    res.status(201).json(subscriber);
  } catch (err) {
    res.status(400).json({ error: "Failed to subscribe to the newsletter." });
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
