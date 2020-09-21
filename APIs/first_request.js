var request = require('request');
request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
  if(!error && response.statusCode == 200)
  {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    var parsedData = JSON.parse(body);
    console.log(parsedData.name+" lives in "+parsedData.address.city);
  }
});