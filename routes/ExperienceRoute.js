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
router.get("/getExperiences", async (req, res)=>{
    try {
        const experiences = await Experience.find();
        res.status(200).json(experiences);
    } catch (error) {
        res.status(500).json({message:"Error Fetching Exprencies", error:error.message})
    }
})


module.exports = router;
