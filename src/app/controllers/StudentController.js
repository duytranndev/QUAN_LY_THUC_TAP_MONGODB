const { mutipleMongooseToObject } = require("../../ultil/mongoose");
const Student = require("../models/Student");
class StudentController {
  //INDEX
  index(req, res, next) {
    Student.find({})
      .then((students) => {
        res.send(students);
      })
      .catch(next);
  }
  show(req, res, next) {
    var studentID = req.params.id;
    Student.findOne({ _id: studentID })
      .then((students) => {
        res.json(students);
      })
      .catch(next);
    //res.send("CCC")
  }
  edit(req, res, next) {
    let query = { _id: req.params.id };
    let updateObject = req.body;
    Student.findOneAndUpdate(query, { $set: updateObject })
      .exec()
      .then(() => {
        res.status(200).json({
          success: true,
          message: "Course is updated",
          updateCourse: updateObject,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Server error. Please try again.",
        });
      });
  }

  delete(req, res, next) {
    var query = { _id: req.params.id };
    Student.findOneAndDelete(query)
      .then(() => {
        res.status(200).json({
          success: true,
          message: "Course is delete",
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Server error. Please try again.",
        });
      });
  }
}

module.exports = new StudentController();
