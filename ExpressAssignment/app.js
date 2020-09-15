var express = require("express");
var app = express();
app.get("/",function(req,res){
     res.send("WELCOME! TO MY ASSIGNMENT");
});
app.get("/speak/:animal",function(req,res){
    var sounds = {
      cow : "moo" , 
      pig : "oink" ,
      dog : "woof woof" ,
      cat : "meow"
    };
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The "+animal+" goes ' "+sound+" ' .");
});
app.get("/repeat/:message/:time",function(req,res){
  var mess = req.params.message;
  var sentence = mess.toUpperCase();
  var times = Number(req.params.time);
  var result="";
  for(var i=0; i<times; i++)
  {
     result=result+sentence+" ";
  }
  res.send(result);
});
app.get("*",function(req,res){
  res.send("Sorry,page not found....");
});
app.listen(2000,function(){
  console.log("server has started!");
});