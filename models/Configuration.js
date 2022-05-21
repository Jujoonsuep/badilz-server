const mongoose = require('mongoose');

const configurationSchema = new mongoose.Schema({
    navbarName : {
        type : String,
        required : true
    },
    heroTitleFirst : {
        type : String,
        required : true
    },
    heroTitleSecond : {
        type : String,
        required : true
    },
    heroDescription : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    twitterLink : {
        type : String,
        required : true
    },
    instagramLink : {
        type : String,
        required : true
    },
    facebookLink : {
        type : String,
        required : true
    },
    spotifyLink : {
        type : String,
        required : true
    },
    embedSpotifyLink : {
        type : String,
        required : true
    },
    aboutMeDescription : {
        type : String,
        required : true
    },
    footerQuote : {
        type : String,
        required : true
    },
    footerAuthor : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Configuration', configurationSchema)