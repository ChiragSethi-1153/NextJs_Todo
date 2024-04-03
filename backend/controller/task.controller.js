const { createTask, getTasks, updateTasks, deleteTasks } = require("../service/task.service")

exports.createTask = async(req, res ) =>  {
    try{
        const response = await createTask(req)
        return res.status(201).json(response)
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.getTasks = async(req, res ) =>  {
    try{
        const response = await getTasks(req)
        if(response === 404){
            return res.status(404).json({message: "no task found"})
        }
        return res.status(200).json(response)
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.changeTasks = async (req, res) => {
    try{
        const response = await updateTasks(req)
        return res.status(200).json(response)
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.deleteTasks = async (req, res) => {
    try{
        const response = await deleteTasks(req)
        return res.status(200).json(response)
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}