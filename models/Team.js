const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  linkedinProfile: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  experienceIn: {
    type: String,
    required: true,
  },
  yearsOfExperience: {
    type: Number,
    required: true,
  },
  currentRole: {
    type: String,
    required: true,
  },
});

const Team = mongoose.model('Team', teamMemberSchema);

module.exports = Team;
