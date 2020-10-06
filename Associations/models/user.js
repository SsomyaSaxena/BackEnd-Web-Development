var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/blog_demo_1",{useNewUrlParser:true , useUnifiedTopology:true , useFindAndModify:false });

var userSchema = new mongoose.Schema({
  email: String,
  name : String,
  posts : [{
    type: mongoose.Schema.Types.ObjectId ,
    ref : "Post"
  }]
});
module.exports = mongoose.model("User", userSchema);