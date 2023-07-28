// FAQ Routes
const express = require('express');
const router = express.Router();
const FAQ=require('../models/FAQ')

// Create a new FAQ
router.post('/faqs', async (req, res) => {
    try {
      const faqData = req.body;
      const faq = await FAQ.create(faqData);
      res.status(201).json(faq);
    } catch (err) {
      res.status(400).json({ error: 'Failed to create a new FAQ.' });
    }
  });
  
  // Get all FAQs
  router.get('/faqs', async (req, res) => {
    try {
      const faqs = await FAQ.find();
      res.json(faqs);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch FAQs.' });
    }
  });
  
  // Update a FAQ
  router.put('/faqs/:id', async (req, res) => {
    try {
      const faqId = req.params.id;
      const updatedData = req.body;
      const updatedFAQ = await FAQ.findByIdAndUpdate(faqId, updatedData, { new: true });
      res.json(updatedFAQ);
    } catch (err) {
      res.status(400).json({ error: 'Failed to update the FAQ.' });
    }
  });
  
  // Delete a FAQ
  router.delete('/faqs/:id', async (req, res) => {
    try {
      const faqId = req.params.id;
      await FAQ.findByIdAndDelete(faqId);
      res.json({ message: 'FAQ deleted successfully.' });
    } catch (err) {
      res.status(400).json({ error: 'Failed to delete the FAQ.' });
    }
  });
  
  module.exports=router