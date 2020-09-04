var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var User = require("./models/user");

mongoose.connect("mongodb://localhost:27017/Registration",{useNewUrlParser:true , useUnifiedTopology:true});
var app = express();
app.set("view engine","ejs");
app.use(express.static(__dirname+ "/public" )); 
app.use(bodyParser.urlencoded({extended : true}));
app.use(require("express-session")({
  secret: "Larry",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// AUTH ROUTES //

// Show sign-up form
app.get("/",function(req,res){
   res.render("Registration-Page");
});

// Handle sign-up form
app.post("/",function(req,res){
  User.register(new User({username: req.body.username}),req.body.password,function(err,user){
    if(err)
    {
      console.log("Error in POST register route "+err);
    }
    passport.authenticate("local")(req,res,function(){ 
      //twitter or facebook or google etc. can be used instead of local.
      res.redirect("/login");
    });
  });
}); 

// Show login form
app.get("/login",function(req,res){
  res.render("Login-Page");
});

// Login logic
app.post("/login",passport.authenticate("local",{
  successRedirect : "/success",
  failureRedirect : "/"
}),function(req,res){
});

//Login successful
app.get("/success", isLoggedIn , function(req,res){
  res.render("Success-Page");
});

//Logout
app.get("/logout",function(req,res){
  req.logout();
  res.redirect("/");
});

function isLoggedIn(req,res,next)
{
  if(req.isAuthenticated())
  {
    return next();
  }
  res.redirect("/login");
}

app.listen(2000,function(){
  console.log("AuthDemo started!");
});