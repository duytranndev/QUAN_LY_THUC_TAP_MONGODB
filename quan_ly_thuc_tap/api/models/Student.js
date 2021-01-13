const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Student = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, maxlength: 255 },
    birthday: { type: String, maxlength: 255 },
    class: { type: String, maxlength: 255 },
    gender: { type: String, maxlength: 255 },
    mssv: { type: String, unique: true, required: true },
    contact: { type: String, maxlength: 255 },
    email: { type: String, maxlength: 255 },
    describe: { type: String, maxlength: 255 },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", Student);
