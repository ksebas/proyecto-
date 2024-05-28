import { Link } from "react-router-dom";
import { useTask } from "../context/TasksContext";



function TaskCard({task}) {
    const {deleteTask} = useTask()

  return (
    <div className="bg-zinc-700 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
      <h1 className="text-2xl font-bold">{task.title}</h1>
      <div className="flex gap-x-2 items-center">
        <button className="" 
        onClick={()=>
        {
            deleteTask(task._id);
            console.log(task._id)
        }}
        >delete</button> 
        <Link to ={`/tasks/${task._id}`}>edit</Link>
      </div>
      </header>
      <p className="text-slate-300">{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()} </p>
    </div>
  )
}

export default TaskCard;