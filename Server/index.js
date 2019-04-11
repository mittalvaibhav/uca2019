var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var bookRoute = require('./routes/bookRoute');
// app.use('/static', express.static(path.join(__dirname , static)));
app.use(express.static('./staticContent'));

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());

app.use('/book', bookRoute)

app.get('/', (req, res) => {
  console.log("Root method called");
  res.send("Root method called");
})

app.listen(8080, () => {
  console.log("I am listening at port 8080");
});