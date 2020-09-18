var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(express.static("EJSdemo" + "/public/"));

app.get("/",function(req,res){
  res.render("home");
});
app.get("/inLovewith/:thing",function(req,res){
  var thing = req.params.thing;
  res.render("love", {Thingvar : thing});
});
app.get("/posts",function(req,res){
  var posts = [ 
    {title : "hello" , author : "xyz"},
    {title : "babes" , author : "abc"},
    {title : "louis" , author : "ijk"}
  ];
  res.render("posts",{posts : posts});
})
app.listen(1000,function()
{
  console.log("Server started!")
});