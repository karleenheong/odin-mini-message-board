const express = require("express");
const app = express();
const PORT = 3000;
const path = require("node:path");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form");
});

app.post("/new", (req, res) => {
  const { author, message } = req.body;
  messages.push({ text: message, user: author, added: new Date() });
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});