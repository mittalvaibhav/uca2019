var mongoose = require('mongoose');
var config = require('./../config.json')

mongoose.connect(config.connectionstring, {useNewUrlParser: true});

var bookSchema = mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    authorName: String,
    isAvailable: Boolean,
    bookVersion: {
    }
})

var bookModel = mongoose.model('bookModel', bookSchema, "books");

module.exports.find = (callback) => {
    bookModel.find(callback);
}

module.exports.addBook = (book, callback) => {
    bookModel.create(book, callback)
}

module.exports.updateBook = (query, book, callback) => {
    bookModel.findOneAndUpdate(query, book, callback)
}

module.exports.deleteBook = (query, callback) => {
    bookModel.findOneAndRemove(query, callback)
}