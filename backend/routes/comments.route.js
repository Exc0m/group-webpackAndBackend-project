const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");

const router = Router();

router.post("/news/:id/comments", commentsController.addComments)
router.delete("/comments/:id", commentsController.deleteComments)
router.get("/news/:id/comments", commentsController.getCommentsId)

module.exports = router