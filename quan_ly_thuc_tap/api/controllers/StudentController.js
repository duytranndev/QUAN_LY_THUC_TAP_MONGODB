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
        res.send(students);
      })
      .catch(next);
  }
  // showByMsv(req, res, next) {
  //   var mssvStudent = req.params.mssv;
  //   Student.findOne({ mssv: mssvStudent })
  //     .then((students) => {
  //       res.send(students);
  //     })
  //     .catch(next);
  // }
  // showById(req, res, next) {
  //   let idStudent = req.params.id;
  //   Student.findById({_id : idStudent})
  //     .then((students) => {
  //       res.send(students);
  //     })
  //     .catch(next);
  // }
  edit(req, res, next) {
    let query = { _id: req.params.id };
    let updateObject = req.body;
    Student.findOneAndUpdate(query, { $set: updateObject })
      .exec()
      .then(() => {
        res.status(200).json({
          success: true,
          message: "Student is updated",
          updateStudent: updateObject,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Server error. Please try again.",
        });
      });
  }
  // create(req,res,next){
  //   const formData = req.body;
  //   const student = new Student(formData);  
  //   student.save()
  //     .then(()=>{
  //       res.status(200).json({
  //         success: true,
  //         message: "Student is created"
  //       });
  //     })
  //     .catch((err)=>{
  //       res.status(500).json({
  //         success: false,
  //         message: "Server error. Please try again.",
  //       });
  //     })
  // }

  delete(req, res, next) {
    var query = { _id: req.params.id };
    Student.findOneAndDelete(query)
      .then(() => {
        res.status(200).json({
          success: true,
          message: "Student is deleted",
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
