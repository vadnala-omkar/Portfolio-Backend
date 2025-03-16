const express = require("express");
const Project = require("../models/Project")
const router = express.Router();

// Add a new project
router.post("/add-project", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/getProjects", async (req, res)=>{
  try {
    const projects = await Project.find();
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({message:"Error Fetching Projects", error:error.message})
  }
})

module.exports = router;
