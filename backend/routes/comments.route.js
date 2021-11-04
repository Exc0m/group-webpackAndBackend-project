const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");

const router = Router();

router.post("/", commentsController.addComments)
router.delete("/:id", commentsController.deleteComments)
router.get("/", commentsController.getCommentsId)

module.exports = router