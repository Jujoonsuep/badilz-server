const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    year : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    imageUrl : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Project', projectSchema)