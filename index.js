var express = require('express');
var cors = require('cors');
var mockProperties = require('./data/property.json');
// var path = require('path');
// var fs = require('fs');

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function (request, response) {
  response.send('Hello World!')
});

app.get('/properties', function (req, res) {
  res.send(mockProperties);
  // fs.readFile(mockProperties, 'utf8', function (err, data) {
  //   if (err) {
  //     // handle error
  //     console.log(err);
  //     return;
  //   }
  
  //   jsonData = JSON.parse(data);
  //   res.send(jsonData);
  // });

  // let readable = fs.createReadStream(propertyFilePath);
  // readable.pipe(res);
  // res.send('Hello World!' + propertyFilePath);

});

app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'));
});