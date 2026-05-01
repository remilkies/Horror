const Review = require('./models/Review');

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const sacredKey = process.env.MONGO_URI;

console.log("connecting to lcoud")

mongoose.connected(sacredKey)
.then(() => console.log("connected to db"))
.catch((err) => console.log("CONNECTION FAILED", err))


app.post('/api/reviews', async (req, res) => {
    console.log("INCOMINGGGG")
    try{
        console.log("🦇 Fetching all horror reviews...");
        const reviews = await Review.find();
        res.json(reviews);
    } catch(error) {
        console.error("Failed to fetch reviews:", error);
        res.status(500).json({ message: "Server error" })
    }
});

app.post('/api/reviews', async (req, res) => {
    try {
        console.log(`🔪 Saving new reviews for TMDB ID: ${req.body.tmdbId}`);

        //HAVE I ALREADY VIEWED THIS (BUT WHAT ABOUT THE HIGHLY RATED VERSION)
        const existingReview = await Review.findOne({ tmdbId: req.body });
        if (existingReview) {
            return res.status(400).json({ message: "You already revied this nightmare!" });
        }

        //create and save the new review
        const newReview = new Review(req.body);
        const savedReview = await newReview.save();

        res.status(201).json({ message: "Review saved successfully!", review: savedReview });
    } catch (error) {
        console.error("💀 Failed to save review:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

app.listen(PORT, () => {
    console.log("WE'RE ALIVE")
})


