const express = require('express');
const router = express.Router();
const studentController = require('../app/controllers/StudentController')

router.get('/',studentController.index)
router.get('/:id',studentController.show)
router.delete('/:id',studentController.delete)
router.put('/:id',studentController.edit)

module.exports = router