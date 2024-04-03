const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    task: {
        type: String
    }, 
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: "pending"
    }
})

const Tasks = mongoose.model('tasks', taskSchema)
module.exports = Tasks