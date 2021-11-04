const Category = require("../models/Category.model");

module.exports.categoriesController = {
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (e) {
      res.json("error");
    }
  },

  addCategory: async (req, res) => {
    try {
      await Category.create({ name: req.body.name });
      res.json("Категория добавлена");
    } catch (e) {
      res.json("error");
    }
  },

  deleteCategoryById: async (req, res) => {
    try {
      await Category.findByIdAndRemove(req.params.id);
      res.json("Категория удалена");
    } catch (e) {
      res.json("error");
    }
  },
};