var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var expressSanitizer = require("express-sanitizer");
var methodOverride = require("method-override");
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));

mongoose.connect("mongodb://localhost:27017/blog_app",{useNewUrlParser:true , useUnifiedTopology:true , useFindAndModify:false });

var blogSchema = new mongoose.Schema({
  title:String,
  image:String,
  body:String,
  created:{type:Date , default:Date.now}
});

var Blog = mongoose.model("Blog",blogSchema);

// Blog.create({
//   title:"New Blog",
//   image:"https://i.pinimg.com/564x/64/f0/f6/64f0f66afa73a81ad72509e5bbdb3195.jpg",
//   body:"Its a beautiful rainbow dog!!"
// });

app.get("/",function(req,res){
  res.redirect("/blogs");
});

//INDEX
app.get("/blogs",function(req,res){
  Blog.find({},function(err,blogs){
    if(err)
    {
      console.log("ERROR!");
    }
    else{
      res.render("index",{blogs : blogs});
    }
  });
});

//NEW
app.get("/blogs/new",function(req,res){
  res.render("new");
});

//CREATE
app.post("/blogs",function(req,res){
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.create(req.body.blog,function(err,newBlog){
    if(err)
    {
      res.render("new");
    }
    else
    {
      res.redirect("/blogs");
    }
  });
});

//SHOW
app.get("/blogs/:id",function(req,res){
  Blog.findById(req.params.id,function(err , foundBlog){
    if(err)
    {
      res.redirect("/blogs");
    }
    else{
      res.render("show",{blog : foundBlog});
    }
  });
});

//EDIT
app.get("/blogs/:id/edit",function(req,res){
  Blog.findById(req.params.id,function(err , foundBlog){
    if(err)
    {
      res.redirect("/blogs");
    }
    else{
      res.render("edit",{blog : foundBlog});
    }
  });
});

//UPDATE
app.put("/blogs/:id",function(req,res){
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog ,function(err , updatedBlog){
    if(err)
    {
      res.redirect("/blogs");
    }
    else{
      res.redirect("/blogs/"+req.params.id);
    }
  });
});

//DELETE
app.delete("/blogs/:id",function(req,res){
    Blog.findByIdAndRemove(req.params.id,function(err){
    if(err)
    {
        res.redirect("/blogs");
    }
    else{
        res.redirect("/blogs");
    }
  });
 });


app.listen(1600,function(){
  console.log("Blog is running!");
});