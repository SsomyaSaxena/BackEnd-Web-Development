var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app",{useNewUrlParser:true , useUnifiedTopology:true});

var catSchema= new mongoose.Schema({
  name: String ,
  age : Number , 
  temperament : String
});

var Cat = mongoose.model("Cat",catSchema);

// var loona = new Cat({
//   name : "Loona",
//   age : 5 ,
//   temperament : "Cutie"
// });

// loona.save(function(err,cat){
//   if(err)
//   {
//     console.log("Somthing went wrong!");
//   }
//   else{
//     console.log("We saved an entry!");
//     console.log(cat);
//   }
// })

Cat.create({
  name:"Missy",
  age:3,
  temperament: "Bland"
},function(err,cat){
  if(err){
    console.log("ERROR");
  }
  else{
    console.log("ADDED THE CAT");
    console.log(cat);
  }
});

Cat.find({},function(err,cat){
  if(err){
    console.log("ERROR");
  }
  else{
    console.log("ALL THE CATS.....");
    console.log(cat);
  }
});