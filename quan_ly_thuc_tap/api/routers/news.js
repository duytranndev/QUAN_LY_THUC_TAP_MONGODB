const express = require('express');
const router = express.Router();
const newsController = require('../controllers/NewsController')


router.get('/:slug',newsController.show)
router.delete('/:id',newsController.delete)
router.put('/:id',newsController.edit)
router.get('/',newsController.index)
router.post('/',newsController.create)

module.exports = router