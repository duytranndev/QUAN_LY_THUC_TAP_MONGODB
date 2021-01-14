
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug)
const News = new Schema(
  {
      title:{type:String, unique:true, required:true},
      image:{type:String, maxlength:255},
      describe:{type:String, maxlength:255},
      slug:{type:String, slug:"title", unique:true}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("News",News)