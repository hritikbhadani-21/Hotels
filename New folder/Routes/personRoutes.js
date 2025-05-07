const express = require('express');
const router = express.Router();

const Person = require("../Models/person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();

    console.log("Data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; // Extract and normalize workType
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      // Fetch persons by work type
      const response = await Person.find({ work: workType });
      console.log("Response Fetched");
      return res.status(200).json(response);
    }
    else{
      res.status(400).json({error:'Invalid WorkType'});
    }

    
  } catch (error) {
    console.error("Error fetching persons:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});


// ✅ Moved this OUTSIDE the POST route
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    res.status(200).json(data); // ✅ fixed variable
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});




module.exports = router;
