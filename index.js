import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.get('/properties', function(req, res) {
  let propertyFilePath = path.join(__dirname, 'data/property.json');
  let readable = fs.createReadStream(propertyFilePath);
  readable.pipe(res);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port')); 
});