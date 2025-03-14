const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    fullDescription:{
        type:String,
        required: true
    },
    tech: {
        type: [String],
        required: true
    },
    status:{
        type:String,
        required: true
    },
    github:{
        type:String,
        required: true
    },
    demo:{
        type:String,
        required: true
    }

});
module.exports = mongoose.model("Project", ProjectSchema);





// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const Certificate = require("../models/certificate.model");

// const router = express.Router();

// // Set up Multer for file upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Save images inside 'uploads/' folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Rename file
//   },
// });

// const upload = multer({ storage: storage });

// // @route POST /upload
// // @desc Upload certificate with image
// router.post("/upload", upload.single("certificateImage"), async (req, res) => {
//   try {
//     const { title, issuer, issueDate } = req.body;
//     const imageUrl = `/uploads/${req.file.filename}`; // Path to access image

//     // Save certificate details in MongoDB
//     const newCertificate = new Certificate({ title, issuer, issueDate, imageUrl });
//     await newCertificate.save();

//     res.status(201).json({ message: "Certificate uploaded successfully!", certificate: newCertificate });
//   } catch (error) {
//     res.status(500).json({ error: "Error uploading certificate" });
//   }
// });

// module.exports = router;
