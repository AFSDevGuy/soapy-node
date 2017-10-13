// server.js
const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();

const port = 8000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});


app.get('/', function (req, res) {
  res.send('Hello World!')
  // npm install soap
  var soap = require('soap');
  var url = 'http://www.webservicex.net/ConvertTemperature.asmx?WSDL';
  var args = {Temperature:'10',FromUnit:'degreeCelsius',ToUnit:'degreeFahrenheit'};
  soap.createClient(url, function(err, client) {
  	client.addHttpHeader('User-Agent', `CustomUserAgent`);
    client.ConvertTemp(args, function(err, result) {
        console.log(result);
    });
  });
});			
