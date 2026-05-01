const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    tmdbId: {
        type: Number,
        required: true,
        unique: true
    },

    title: {
        type: String,
        required: true
    },

    myReview: { 
        type: String, 
        required: true
    },

    myRating: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    },

    //the spoilt milk ststa!

    isHighlyRated: {
        type: Boolean,
        default: false
    },

    isCultVibes: {
        type: Boolean,
        default: false
    },

    isBodyHorror: {
        type: Boolean,
        default: false
    },

    isGory: {
        type: Boolean,
        default: false
    },

    isDisturbing: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Review', reviewSchema);