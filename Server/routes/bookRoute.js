var express = require("express");
var app = express();
var router = express.Router();

var Book = require('./bookModel');

router.get('/', (req, res) => {
    console.log("books api called");
    res.send("Books api called");
})

router.get('/getRecentBooks', (req, res) => {
  Book.find((error, response) => {
    console.log(response);
    res.send(response);
  })
    
})

router.post('/addNewBook', (req, res) => {
    // booksList.push(req);
    var newBook = req.body;
    // booksList.push(newBook);
    Book.addBook(newBook, (error, response) => {
      if(error) {
        res.statusCode = 502;
        res.send(error);
      } else {
        res.send(response);
      }
    })
})

router.put('/updateBook', (req, res) => {
  var newBook = req.body;
  var query = {_id: req.query.id};
  // booksList.push(newBook);
  Book.updateBook(query, newBook, (error, response) => {
    if(error) {
      res.statusCode = 400;
      res.send(error);
    } else {
      console.log(response);
      res.send(response);
    }
  })
})

module.exports = router;