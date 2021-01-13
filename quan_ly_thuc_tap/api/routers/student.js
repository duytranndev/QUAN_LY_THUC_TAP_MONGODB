const express = require('express');
const router = express.Router();
const studentController = require('../controllers/StudentController')

router.get('/',studentController.index)
router.get('/?:slug',studentController.show)
router.delete('/:id',studentController.delete)
router.put('/:id',studentController.edit)
router.post('/',studentController.create)

module.exports = router