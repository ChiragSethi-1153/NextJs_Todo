const router = require("express").Router()

router.use('/', require('./task.routes'))

module.exports = router