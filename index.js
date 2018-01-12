var express = require('express');
var cors = require('cors');
var mockProperties = require('./api/data.json');

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function (request, response) {
  response.send('Hello World!')
});

app.get('/listings', function (req, res) {
  var data = JSON.parse(mockProperties);
  res.send(data.listings);
});

app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'));
});