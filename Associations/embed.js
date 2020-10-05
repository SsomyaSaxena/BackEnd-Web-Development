var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/blog_demo",{useNewUrlParser:true , useUnifiedTopology:true , useFindAndModify:false });

var postSchema = new mongoose.Schema({
  title: String,
  content : String
});
var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
  email: String,
  name : String,
  posts : [postSchema]
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//   email: "coltonhaynes@gmail.com",
//   name : "Colt Haynes"
// });

User.findOne({name:"Colt Haynes"},function(err,user){
  if(err)
  {
    console.log(err);
  }
  else
  {
    user.posts.push({
      title:"Teen Wolf",
      content: "Best show I worked on."
    });
    user.save(function(err,user){
      if(err)
      {
        console.log(err);
      }
      else
      {
        console.log(user);
      }
    }); 
  }
})

// newUser.posts.push({
//   title:"Pride Month",
//   content: "Love is Love!"
// });

// var newPost = new Post({
//    title: "Reflections on Apples",
//    content : "They are delicious"
//  });
//  newPost.save(function(err,post){
//    if(err)
//    {
//      console.log(err);
//    }
//    else
//    {
//      console.log(post);
//    }
//  });