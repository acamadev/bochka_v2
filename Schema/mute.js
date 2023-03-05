const mongoose = require('../index.js');

const Mute = new mongoose.Schema({
    userID: String,
    guildID: String,
    reason: String,
    endDate: Date
  });

  module.exports = mongoose.model('Mute', Mute);