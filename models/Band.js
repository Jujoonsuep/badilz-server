const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const bandSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    country : {
        type : String,
        default: 'INA'
    },
    introduction : {
        type : String,
        required : true
    },
    firstDescription : {
        type : String,
        required : true
    },
    secondDescription : {
        type : String
    },
    coverUrl : {
        type : String,
        required : true
    },
    imageStatus : {
        type : String,
        default : 'none' 
    },
    imageId : [{
        type : ObjectId,
        ref : 'Image'
    }],
    twitterLink : {
        type : String
    },
    instagramLink : {
        type : String
    },
    facebookLink : {
        type : String
    },
    spotifyLink : {
        type : String
    },
    sourceLink : {
        type : String
    }
})

module.exports = mongoose.model('Band', bandSchema)