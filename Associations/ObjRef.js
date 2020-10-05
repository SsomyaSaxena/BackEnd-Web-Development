var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/blog_demo_1",{useNewUrlParser:true , useUnifiedTopology:true , useFindAndModify:false });

var Post = require("./models/post");
var User = require("./models/user");

// User.create({
//   email: "bobby@gmail.com",
//   name: "Bobby"
// });

// part 1 was saved in "posts" collection in db without any connection to the user profile while part 2 and part 3 were saved in connection to the user.

Post.create({
  title: "Happy dayzz part 4",
  content: "Make your everyday count!"
},function(err,post){
  User.findOne({email:"bobby@gmail.com"},function(err,userFound){
    if(err)
    {
      console.log(err);
    }
    else
    {
      userFound.posts.push(post);
      userFound.save(function(err,data){
        if(err)
        {
          console.log(err);
        }
        else{
          console.log(data);
        }
      });
    }
  });
});

// User.findOne({email:"bobby@gmail.com"}).populate("posts").exec(function(err,user){
//    if(err)
//    {
//      console.log(err);
//    }
//    else
//    {
//      console.log(user);   }
// });