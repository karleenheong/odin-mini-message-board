const express = require("express");
const app = express();
const PORT = 3000;
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { message: "This is the homepage"});
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});