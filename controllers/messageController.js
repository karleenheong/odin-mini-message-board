const { messages, links } = require("../data");

const messageDetail = (req, res, next) => {
  const messageId = parseInt(req.params.id);
  const message = messages.find(m => m.id === messageId);

  if(!message) {
    return next(new Error("Message not found"));
  }

  res.render("message", { title: "Message Details", message: message, links: links });
};

module.exports = { messageDetail };
