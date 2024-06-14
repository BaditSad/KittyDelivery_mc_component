require('dotenv').config();

const componentRouter = require("./controllers/ComponentController");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3001;
const mongoURI = process.env.MONGO_URI;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB!");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
  process.exit();
});

app.use("/", componentRouter);

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
