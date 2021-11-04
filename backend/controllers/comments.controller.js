const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  addComments: async (req, res) => {
    try {
      await Comment.create({
        author: req.body.author,
        text: req.body.text,
        news: req.params.id,
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
      const commentsId = await Comment.find({ news: req.params.id })
      .populate("news")
      .lean();
      res.json(commentsId);
    } catch (e) {
      res.json("error");
    }
  },
};
