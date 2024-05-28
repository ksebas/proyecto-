import { useForm} from 'react-hook-form'
import { useTask } from '../context/TasksContext';
import { useNavigate , useParams} from 'react-router-dom';
import { useEffect } from 'react';

function TaskFromPage() {
  const { register , handleSubmit , setValue} = useForm();
  const {createTask , getTask , updateTask} = useTask();
  const  navigate = useNavigate();
  const params = useParams();

  useEffect(() =>{
    async function  loadTask()
   {
    if(params.id){
      const task = await getTask(params.id);
      console.log(task);
      setValue('title', task.title)
      setValue('description', task.description)
     }
   }
   loadTask()
  },[])


  const onSubmit = handleSubmit((data) => {

    if(params.id){
      updateTask(params.id, data);
    }
    else{
      createTask(data);
      
    }
    navigate('/tasks');
  })
  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Titulo</label>
        <input type="text" placeholder="title" {...register("title")}  className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'/>
        <textarea placeholder="description" rows="3" {...register("description")} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'>  
        </textarea>

        <button type="submit" className=''>Guardar</button>
      </form>
    </div>
  )
}

export default TaskFromPage