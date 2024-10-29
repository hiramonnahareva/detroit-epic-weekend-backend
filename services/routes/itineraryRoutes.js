// routes/itineraryRoutes.js
const express = require("express");
const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");
const Itinerary = require("../../models/Itinerary");
const User = require("../../models/User");

const router = express.Router();

// Initialize OpenAI API
const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

// Generate itinerary route
router.post("/generate-itinerary", async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);

    // Use OpenAI to generate itinerary
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Generate a custom itinerary with dining, entertainment, and lodging options for a traveler interested in ${user.preferences.dining}, ${user.preferences.entertainment} in ${user.preferences.location}.`,
      max_tokens: 200,
    });

    const itinerary = response.data.choices[0].text;
    const newItinerary = await Itinerary.create({
      userId: user._id,
      date: new Date(),
      itineraryItems: JSON.parse(itinerary), // Assumes OpenAI returns JSON-compatible format
    });

    res.status(200).json(newItinerary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Modify itinerary route
router.put("/modify-itinerary/:id", async (req, res) => {
  try {
    const updatedItinerary = await Itinerary.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedItinerary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
