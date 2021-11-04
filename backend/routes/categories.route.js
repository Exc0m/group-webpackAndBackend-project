const { Router } = require("express");
const { categoriesController } = require("../controllers/categories.controller");

const router = Router();

router.get("/", categoriesController.getCategories);
router.post('/', categoriesController.addCategory)
router.post('/:id', categoriesController.deleteCategoryById)

module.exports = router