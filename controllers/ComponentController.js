const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
module.exports = router;
const Component = require("../models/component");

router.get("/components", async (res) => {
  try {
    const components = await Component.find();
    if (!components) {
      return res.status(404).json({ message: "Aucun composant trouvé !" });
    }
    res.json(components);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
