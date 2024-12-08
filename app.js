const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("node:path");
const messageRouter = require("./routes/messageRouter");
const { messages, links } = require("./data");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/message", messageRouter);

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", links: links, messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form", { links: links });
});

app.post("/new", (req, res) => {
  const { author, message } = req.body;
  const newId = messages.length;
  messages.push({ id: newId, text: message, user: author, added: new Date() });
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
