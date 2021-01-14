const express = require("express");
const router = express.Router();
// const multer = require('multer')
// const upload = multer()
const studentController = require("../controllers/StudentController");
const cloudinary = require("../handlers/cloudinary");
const upload = require("../handlers/upload.multer");
const Student = require("../models/Student");

router.get("/:slug", studentController.show);

//router.get('/:id',studentController.show)
router.delete("/:id", studentController.delete);
router.put("/:id", studentController.edit);
router.get("/", studentController.index);
router.post("/", upload.single("image"), async (req, res) => {
  let formData = req.body;
  const result = await cloudinary.uploader.upload(req.file.path);
  formData.image = result.secure_url;
  const student = new Student(
    formData
  );
  //student.image = result.secure_url
  await student.save()
    .then(() => {
      res.status(200).json({
        success: true,
        message: "create student is success",
      });
    })
    .catch(() => {
      res.status(500).json({
        success: false,
        message: "create student is faild",
      });
    });
});

module.exports = router;
