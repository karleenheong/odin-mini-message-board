const { Router } = require("express");
const { messageDetail } = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/:id", messageDetail);

module.exports = messageRouter;