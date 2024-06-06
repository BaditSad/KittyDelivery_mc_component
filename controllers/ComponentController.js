const express = require("express");
const router = express.Router();
module.exports = router;
const Component = require("../models/component");

router.get("/", async (req, res) => {
  try {
    const components = await Component.find();
    if (!components) {
      return res.status(404).json({ message: "Components not found!" });
    }
    res.json(components);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
