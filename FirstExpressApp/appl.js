var express = require('express');
var app = express();
app.get("/",function(req,res)
{
  res.send("HI there!");
});
app.get("/bye",function(req,res)
{
  res.send("GOODBYE!");
});
app.get("/dog",function(req,res)
{
  console.log("Someone made a request to dog!");
  res.send("BARK BARK!");
});
app.get("/r/:subReddit",function(req,res){
  console.log(req.params);
  var sub = req.params.subReddit;
  var subreddit = subreddit.toUpperCase();
  res.send("WELCOME TO "+subreddit+" SUBREDDIT!");
});
app.get("*",function(req,res)
{
   res.send("STAR!");
});
app.listen(3000,function()
{
  console.log("Server has started!");
})