const { Router } = require('express');
const {newsController} = require('../controllers/news.controller')

const router = Router();

router.post('/', newsController.addNews);
router.delete('/:id', newsController.removeNews);
router.patch('/:id', newsController.editNews);
router.get('/', newsController.getAllNews)
router.get('/:id', newsController.getNewsById)

module.exports = router;