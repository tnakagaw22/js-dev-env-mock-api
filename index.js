var express = require('express');
var cors = require('cors');
var path = require('path');
var fs = require('fs');

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function (request, response) {
  response.send('Hello World!')
});

app.get('/properties', function (req, res) {
  let propertyFilePath = path.join(__dirname, 'data/property.json');
  // let readable = fs.createReadStream(propertyFilePath);
  // readable.pipe(res);
  res.send('Hello World!' + propertyFilePath);

});

app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'));
});