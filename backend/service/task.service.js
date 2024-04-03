const Tasks = require('../model/task')

exports.createTask = async (req) => {
    try{
        const {task} = req.body

    const newTask = await  Tasks({
        task
    })
    await newTask.save()
    console.log(newTask)

    return newTask
}catch(err){
    console.log(err)
    return err
}

}

exports.getTasks = async (req) => {
    try{
        const tasks = await Tasks.find({})
        if(tasks.length > 0){
            return tasks
        }
        else {
            return 404
        }
    }catch(err){
        console.log(err)
        return err
    }
}

exports.updateTasks = async (req) => {
    try{
        const {id, updatedTask, status} = req.body
        const task = await Tasks.findOneAndUpdate({_id: id}, {task: updatedTask, status: status}, {new: true})
        return task
        }
    catch(err){
        console.log(err)
        return err
    }
}

exports.deleteTasks = async (req) => {
    try{
        const {id} = req.params
        const task = await Tasks.findOneAndDelete({_id: id})
        return task
        }
    catch(err){
        console.log(err)
        return err
    }
}