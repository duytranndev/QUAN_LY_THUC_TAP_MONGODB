
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug)

//

const Student = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, maxlength: 255 },
    birthday: { type: String, maxlength: 255 },
    class: { type: String, maxlength: 255 },
    gender: { type: String, maxlength: 255 },
    mssv: { type: String, maxlength: 255},
    contact: { type: String, maxlength: 255 },
    email: { type: String, maxlength: 255 },
    describe: { type: String, maxlength: 255 },
    image:{ type:String, maxlength:255},
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", Student);
