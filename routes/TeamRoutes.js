const express = require('express');
const router = express.Router();
const Team=require('../models/Team')

// Create a new team member
router.post('/team-members', async (req, res) => {
  try {
    const teamMemberData = req.body;
    const teamMember = await Team.create(teamMemberData);
    res.status(201).json(teamMember);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create a new team member.' });
  }
});

// Get all team members
router.get('/team-members', async (req, res) => {
  try {
    const teamMembers = await Team.find();
    res.json(teamMembers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch team members.' });
  }
});

// Update a team member
router.put('/team-members/:id', async (req, res) => {
  try {
    const teamMemberId = req.params.id;
    const updatedData = req.body;
    const updatedTeamMember = await Team.findByIdAndUpdate(
      teamMemberId,
      updatedData,
      { new: true }
    );
    res.json(updatedTeamMember);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update the team member.' });
  }
});

// Delete a team member
router.delete('/team-members/:id', async (req, res) => {
  try {
    const teamMemberId = req.params.id;
    await Team.findByIdAndDelete(teamMemberId);
    res.json({ message: 'Team member deleted successfully.' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete the team member.' });
  }
});


module.exports = router;
