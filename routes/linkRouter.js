const express = require('express')
const router = express.Router()
const linkController = require('../controllers/linkController')

router.get('/add', linkController.pageAdd)
router.post('/addLink', express.urlencoded(), linkController.addOne)

router.get('/all', linkController.getAll)

router.get('/:title', linkController.getOne)

router.delete('/del/:id', linkController.deleteOne)

router.get('/', linkController.main)

module.exports = router