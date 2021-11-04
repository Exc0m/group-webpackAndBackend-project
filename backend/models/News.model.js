const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
  title: String,
  text: String,
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category"
  },
  comments: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Comments"
  },
})

const News = mongoose.model('News', newsSchema);
module.exports = News;

