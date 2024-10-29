// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  preferences: {
    dining: String,
    entertainment: String,
    budget: Number,
    location: String,
  },
});

module.exports = mongoose.model("User", userSchema);

// models/Itinerary.js
const itinerarySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: Date,
    itineraryItems: [
      {
        category: String,
        name: String,
        address: String,
        time: String,
      },
    ],
  });
  
  module.exports = mongoose.model("Itinerary", itinerarySchema);
