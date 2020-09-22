var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");

app.get("/",function(req,res){
  res.render("search");
});

app.get("/results",function(req,res){
  var moviename = req.query.search;
  var URL = "http://www.omdbapi.com/?apikey=thewdb&s="+moviename;
  request(URL,function(error,response,body){
    if(!error && response.statusCode == 200)
    {
      console.log(body);
      var data = JSON.parse(body);
      res.render("results",{data : data});
    }
  });
});
app.listen(505,function(){
  console.log("Movie app has started!");
});