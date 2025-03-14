const express = require('express');
const Experience = require("../models/Experience");
const router = express.Router();

router.post("/add-experience", async (req, res)=>{
    try {
        const newExperience = new Experience(req.body);
        await newExperience.save();
        res.status(201).json(newExperience)
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
})
module.exports = router;
