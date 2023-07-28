const mongoose = require('mongoose');

const newsletterSubscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    // Additional validation for email format
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  // Additional fields related to the subscriber can be added here
});

const NewsletterSubscriber = mongoose.model('NewsletterSubscriber', newsletterSubscriberSchema);

module.exports = NewsletterSubscriber;
