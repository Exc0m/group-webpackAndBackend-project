const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  addComments: async (req, res) => {
    try {
      await Comment.create({
        author: req.body.author,
        comment: req.body.comment,
        news: req.body.news,
      });
      res.json("коммент добавлен");
    } catch (e) {
      res.json("error");
    }
  },
  deleteComments: async (req, res) => {
    try {
      await Comment.findByIdAndRemove(req.params.id);
      res.json("коммент удален");
    } catch (e) {
      res.json("error");
    }
  },
  getCommentsId: async (req, res) => {
    try {
      const comments = await Comment.find()
      .lean();
      res.json(comments);
    } catch (e) {
      res.json("error");
    }
  },
};
