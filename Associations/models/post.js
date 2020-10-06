var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/blog_demo_1",{useNewUrlParser:true , useUnifiedTopology:true , useFindAndModify:false });

var postSchema = new mongoose.Schema({
  title: String,
  content : String
});
var Post = mongoose.model("Post", postSchema);
module.exports = Post;