const express = require("express");
const router = express.Router();

const MenuItem = require("../Models/MenuItem");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const Menu = new MenuItem(data);
    const response = await Menu.save();

    console.log("Data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    console.error("Error fetching menu items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/:taste", async (req, res) => {
try {
    const taste = req.params.taste; // Extract and normalize taste
    if (taste == "sweet" || workType == "sour" || workType == "spicy") {
      // Fetch menu by taste
      const response = await MenuItem.find({taste: taste });
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


module.exports = router;
