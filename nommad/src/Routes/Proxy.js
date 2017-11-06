//Dependencies
const express = require('express');
const request = require('request');
const app = express();


//Routerinos
app.get('/', function(req, res) {
  //I'm assuming that client_id is a public api key that could be used.
  request('https://api.yelp.com/v3/?key=O5Q0Q2neGOLY6zUlCa3fKQ', function(err, response, body) {
    if(!err && response.statusCode === 200) {
      console.log(body)
    }
  })
})

app.listen(3000, function() {
  console.log('server runnin on port 3000');
})
