const { createTask, getTasks, changeTasks,  deleteTasks } = require('../controller/task.controller')

const router = require('express').Router()

router.post('/tasks', createTask)
router.get("/tasks", getTasks)
router.put("/tasks", changeTasks)
router.delete('/tasks/:id', deleteTasks)

module.exports = router