const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  news: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "News",
  }
})
const Comment = mongoose.model("Comment", commentSchema)
module.exports = Comment