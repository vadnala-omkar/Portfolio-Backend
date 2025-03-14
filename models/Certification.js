const mongoose = require('mongoose');
const { title } = require('process');
const CertificateSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    issuer:{
        type:String,
        required: true
    },
    date:{
        type: String,
        
    },
    credential:{
        type:String,
        required: true
    },
    imageurl:{
        type:String,
        required: true
    }

}) ;

module.exports = mongoose.model("Certificate", CertificateSchema);

