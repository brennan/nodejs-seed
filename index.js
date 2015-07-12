var express = require('express'),
    app = express();
    bodyParser = require('body-parser');

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
