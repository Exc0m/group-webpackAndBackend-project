const News = require('../models/News.model')

module.exports.newsController = {
  addNews: async (req, res) => {
    try {
      await News.create({
        title: req.body.title,
        text: req.body.text,
        category: req.body.category
      })
      res.json('Новость добавлена')
    } catch (e) {
      res.json(e.message)
    }
  },
  removeNews: async (req, res) => {
    try {
      const removeNews = await News.findByIdAndRemove(req.params.id)
      res.json(removeNews)
    } catch (e) {
      res.json(e.message)
    }
  },
  editNews: async (req, res) => {
    try {
      const editNews = await News.findByIdAndUpdate(req.params.id, {$set: req.body})
      res.json(editNews)
    } catch (e) {
      res.json(e.message)
    }
  },
  getAllNews: async (req, res) => {
    try {
      const getNews = await News.find();
      res.json(getNews)
    } catch (e) {
      res.json(e.message)
    }
  }
}
