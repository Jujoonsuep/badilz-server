const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    journalId: [{
        type: ObjectId,
        ref: 'Journal'
    }]
})

module.exports = mongoose.model('Category', categorySchema)