const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const componentSchema = new Schema({
  component_name: { type: String, required: true },
  component_template: { type: String, required: true },
});

module.exports = mongoose.model("Component", componentSchema);
