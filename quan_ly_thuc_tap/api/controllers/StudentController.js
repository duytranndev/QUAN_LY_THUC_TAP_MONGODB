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
    var slugStudent = req.params.slug;
    Student.findOne({ slug: slugStudent })
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
  create(req,res,next){
    const formData = req.body;
    const student = new Student(formData);
    student.save()
      .then(()=>{
        res.status(200).json({
          success: true,
          message: "Student is created"
        });
      })
      .catch((err)=>{
        res.status(500).json({
          success: false,
          message: "Server error. Please try again.",
        });
      })
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
