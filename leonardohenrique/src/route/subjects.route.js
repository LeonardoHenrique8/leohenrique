const express = require('express')
const router = express.Router()
const controller = require('../controller/subjects.controller')

router.post('/', controller.create)
router.get('/', controller.allSubjects)
router.get('/x/:id', controller.subjectsById)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)


module.exports = router