import Task from '../models/tasks.model.js'

export const getTasks = async (req , res)=>{
    const tasks = await Task.find({
        user:req.user.id
    }).populate('user')
    res.json(tasks)
}
    
export const createTasks = async (req , res)=>{
    const { title, description , date} = req.body;
    console.log(req.user);
    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
    });
    const savedTask = await newTask.save();
    res.json(savedTask)
}

export const getTask = async (req , res)=>{
   try {
    const task = await Task.findById(req.params.id).populate('user')
    if(!task) return res.status(404).json({message: 'tarea no encontrada'})
    res.json(task)
   } catch (error) {
    return res.status(400).json({message: "task not found"})
   }
} 

export const updateTasks = async (req , res)=>{
    const task = await Task.findByIdAndUpdate(req.params.id , req.body,{
        new: true
    })
    if(!task) return res.status(404).json({message: 'tarea no encontrada'})
    res.json(task)
}

export const deleteTasks = async (req , res)=>{
    const task = await Task.findByIdAndDelete(req.params.id)
    if(!task) return res.status(404).json({message: 'tarea no encontrada'})
    return res.sendStatus(204);
}