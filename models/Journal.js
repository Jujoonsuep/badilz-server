const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const journalSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    year : {
        type : String,
        required : true
    },
    journalQuote : {
        type : String,
        required : true
    },
    journalContentFirst : {
        type : String,
        required : true
    },
    journalContentSecond : {
        type : String,
        required : true
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
    categoryId : {
        type : ObjectId,
        ref : 'Category'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Journal', journalSchema)