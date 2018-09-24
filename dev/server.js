var http = require('http');

http.createServer( function (req, res){
    res.writeHead(200, {'Content-Type':'text-plain'});
    res.end('Hello World');
}).listen(3000)
console.log("Test Hello World comand")


var request = require('request');

request('https://samples.openweathermap.org/data/2.5/weather?q=Franca,br&appid=b6907d289e10d714a6e88b30761fae22', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  var parsedWeather = JSON.parse(body);
  console.log('A temperatura atual Franca é ' + parsedWeather['main']['temp']); // Print the Temperature in the city of São Paulo
 
});