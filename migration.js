var mongoose = require("mongoose");
var Component = require("./models/component");

var mongoDB = "mongodb://mongo:27017/kittydelivery";
mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", async function () {
  console.log("Connected to MongoDB");

  try {
    await Component.deleteMany({});
    console.log("Components collection cleared");

    let components = [
      {
        component_name: "header.js",
        component_template: "<template><header><img class='logo' src='../assets/logo.jpg' alt='Company Logo'/></header></template>",
      },
      {
        component_name: "footer.js",
        component_template: "<template><footer><p>&copy; 2024 Company Name. All rights reserved.</p></footer></template>",
      },
      {
        component_name: "sidebar.js",
        component_template: "<template><aside><nav><ul><li>Home</li><li>About</li><li>Contact</li></ul></nav></aside></template>",
      },
    ];

    await Component.insertMany(components);
    console.log("Components inserted successfully");
  } catch (err) {
    console.error("Error inserting components:", err);
  } finally {
    mongoose.connection.close();
  }
});
