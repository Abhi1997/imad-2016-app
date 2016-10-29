var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res) {
    res.send('Gohan is the son of Goku');
});
app.get('/article-two',function(req,res) {
    res.send('Goten is his brother');
});
app.get('/article-three',function(req,res) {
    res.send('He killed Cell');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/images.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
