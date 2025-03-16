const express = require("express");
const multer = require("multer");
const path = require("path");
const Certificate = require("../models/Certification");

const router = express.Router();

// Configure Multer Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads"); // Ensure this folder exists
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    },
});

const upload = multer({ storage });

// Upload Route
router.post("/upload", upload.single("file"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const { title, issuer, date, credential } = req.body;
        const imageurl = `/uploads/${req.file.filename}`;

        const newCertificate = new Certificate({ title, issuer, date, credential, imageurl });
        await newCertificate.save();

        res.status(201).json({ message: "Certificate uploaded successfully!", certificate: newCertificate });
    } catch (error) {
        res.status(500).json({ message: "Error uploading certificate", error: error.message });
    }
});

router.get("/getCertificate", async (req, res) => {
    try {
        const certificates = await Certificate.find();
        res.status(200).json(certificates)
    } catch (error) {
        res.status(500).json({message:"Error Fetching certificates", error:error.message})
    }
})



module.exports = router;
