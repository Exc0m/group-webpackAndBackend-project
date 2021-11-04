const { Router } = require('express');

const router = Router();

router.use("/news", require("./news.route.js"))
router.use("/comments", require("./comments.route.js"))
router.use("/categories", require("./categories.route.js"))

module.exports = router;
