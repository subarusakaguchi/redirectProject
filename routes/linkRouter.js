const express = require('express')
const router = express.Router()
const linkController = require('../controllers/linkController')

router.get('/all', linkController.getAll)

router.get('/:title', linkController.getOne)

module.exports = router