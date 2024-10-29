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