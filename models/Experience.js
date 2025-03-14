const mongoose = require('mongoose');
const ProjectExperience = new mongoose.Schema({
    role:{
        type:String,
    },
    company:{
        type:String,
    },
    duration:{
        type:String,
    },
    description:{
        type:String,
    },
})

module.exports = mongoose.model('Experience', ProjectExperience);
