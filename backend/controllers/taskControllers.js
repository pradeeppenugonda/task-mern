const asynHandler = require('express-async-handler')
const Task = require('../models/taskModel');
const User = require('../models/userModel')

const setTask = asynHandler(async (req, res) =>{
    console.log(`Set Task from Task Controller >>`, req.body.text)

    if(req?.body?.text){
        const task = await Task.create({text : req.body.text, user: req.user.id})
        res.status(200).json(task)
    }else{
        res.status(400)
        throw new Error (`Please Enter the task to create from taskController`)
    }

    /*  
    if(!req?.body?.text){
            res.status(400).json({message : `Please Enter the task to create from taskController`});    
        } 
    */

    /*
    // 2nd Way
        if(!req?.body?.text){
            res.status(400)
            throw new Error (`Please Enter the task to create from taskController`)
        }
        res.status(200).json({message : 'Create/Post Tasks from taskController'});
     */

})

/* getTasks() in Book is changed to getAllTasks() */
const getAllTasks = asynHandler ( async (req, res) => {
    console.log(`Get All Tasks from Task Controller`)

    const tasks = await Task.find({user: req.user.id})
    res.status(200).json(tasks)

    // res.status(200).json({message : `Get All Tasks from taskController`})

})

const updateTask = asynHandler(async (req, res) => {


    const task = await Task.findById(req.params.id);
    if(!task){
        res.status(400)
        throw new Error('Task Not Found')
    }

    const user = await User.findById(req.user.id)
    if(!user) {
        res.status(401)
        throw new Error('No such user found')
    }
    if(task.user.toString() !== user.id){
        res.status(401)
        throw new Error('User is not authorized to update')
    }

    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updateTask)

    // res.status(200).json({message : `Update/Put Task for ${req.params.id} updated from taskController`});

})

const deleteTask = asynHandler (async  (req, res) => {
console.log(`Came to delete Task ${req.params.id}`)
    const task = await Task.findById(req.params.id)
    console.log(`Task From Delete >>> `, task)
    if(!task){
        res.status(400);
        throw new Error ('Task Not Found');
    }

    const user = await User.findById(req.user.id)
    console.log(`User Found >>> `, user)
    console.log(`req.params.id >>> for Deletion >>> `,req.params.id)
    if(!user) {
        res.status(401)
        throw new Error('No such user found')
    }
    if(task.user.toString() !== user.id){
        res.status(401)
        throw new Error('User is not authorized to delete')
    }

    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({id: req.params.id, 
        message : 'Success full deletion'
    })

    // res.status(200).json({message : `Delete/delete Task for ${req.params.id} deleted from taskController`});

})


module.exports = {
    getAllTasks,
    setTask,
    updateTask,
    deleteTask
}