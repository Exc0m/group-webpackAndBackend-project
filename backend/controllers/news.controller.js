const News = require('../models/News.model')
const Comment = require('../models/Comment.model')

module.exports.newsController = {
  addNews: async (req, res) => {
    try {
      await News.create({
        title: req.body.title,
        text: req.body.text,
        category: req.body.category,
        comment: req.body.comment
      })
      res.json('Новость добавлена')
    } catch (e) {
      res.json(e.message)
    }
  },
  getNewsById: async (req, res) => {
    try {
      const news = await News.findById(req.params.id)
      const comments = await Comment.find()
      res.json(news, comments)
    } catch (e) {
      res.json(e)
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
      const getNews = await News.find().populate(  "category"   );
      res.json(getNews)
    } catch (e) {
      res.json(e.message)
    }
  }
}
