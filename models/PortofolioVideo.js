const mongoose = require('mongoose');

const portofoliovideoSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    year : {
        type : String,
        required : true
    },
    youtubeLink : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('PortofolioVideo', portofoliovideoSchema)