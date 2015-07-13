var express = require('express'),
    app = express();
    bodyParser = require('body-parser');
    _ = require("underscore");
    mongoose = require('mongoose');
    Test = require('./models/test_model'); //require your model in your server


mongoose.connect('mongodb://localhost/###name-of-your-database-goes-here###');



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

var users = [
  {
    id: 1,
    name: 'Bob',
    username: 'bobiscool'
  },
  {
    id: 2,
    name: 'Julie',
    username: 'julierocks'
  }
];

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/users', function(req, res) {
  res.json(users);
});

app.listen(3000, function() {
  console.log('server started on localhost:3000');
});
