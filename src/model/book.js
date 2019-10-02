const mongoose = require('../config/database');

const BooksSchema = new mongoose.Schema(
  {
    title: String,
    author: String
    }
);
module.exports = mongoose.model('Books', BooksSchema);