const express = require("express");
const router = express.Router();
module.exports = router;
const Component = require("../models/component");

router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const components = await Component.find().skip(skip).limit(limit);

    const totalComponents = await Component.countDocuments();

    if (!components) {
      return res.status(404).json({ message: "Not found" });
    }

    if (components.length === 0) {
      return res.status(201).json({ message: "Empty" });
    }

    res.status(201).json({
      totalPages: Math.ceil(totalComponents / limit),
      components: components,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const component = new Component(req.body);

    if (!component) {
      return res.status(404).json({ message: "Not found" });
    }

    await component.save();

    res.status(201).json({ message: "Item posted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:componentId", async (req, res) => {
  try {
    const component = await Component.findByIdAndDelete(req.params.menuId);

    if (!component) {
      return res.status(404).json({ message: "Not found!" });
    }

    res.status(201).json({ message: "Item deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
