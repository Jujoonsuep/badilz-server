const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const portofolioimageSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    year : {
        type : String,
        required : true
    },
    imageUrl : {
        type : String,
        required : true
    }   
})

module.exports = mongoose.model('PortofolioImage', portofolioimageSchema);