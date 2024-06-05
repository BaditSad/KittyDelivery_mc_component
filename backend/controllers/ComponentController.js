const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
module.exports = router;
const Component = require("../models/component");

router.get("/components", async (req, res) => {
  try {
    const components = await Component.find();
    res.json(components);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
