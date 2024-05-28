import {useForm} from 'react-hook-form'
import {useAuth} from '../context/AuthContest'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function RegisterPage() {
    const {register, handleSubmit,formState:{errors },
    } = useForm();
    const {signup , isAuthenticated, errors : registerErrors} = useAuth();
    const navigate = useNavigate();

   useEffect(() => {
    if(isAuthenticated) navigate('/tasks')
     },  [isAuthenticated])
   

    const onSubmit= handleSubmit(async (values) =>{
        signup(values);
    })

    useEffect(() =>{
        if(isAuthenticated) navigate("/tasks");
    },[isAuthenticated])

    return(
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
        {
            registerErrors.map((error , i )=>(
                <div className='bg-red-600 p-2 m-1 text-white' key={i}>
                    {error}
                </div>
            ))
        }
            <form onSubmit={onSubmit}>
                <input type="text" {...register("username",{required: true})} className='w-full bg-zinc-700 text-white px-4 rounded-md m-1' placeholder='username'/> 
                {errors.username && <p className='text-red-500'> nombre es requerido </p>}
                <input type="email" {...register("email",{required: true})} className='w-full bg-zinc-700 text-white px-4 rounded-md m-1' placeholder='email'/>
                {errors.email && <p className='text-red-500'> Email requerido </p>}
                <input type="password" {...register("password",{required: true})} className='w-full bg-zinc-700 text-white px-4 rounded-md m-1' placeholder='password'/>
                {errors.password && <p className='text-red-500'> contraseña requerida </p>}
                <button type="submit" className='bg-gray-50 text-black border-r-2 m-1'> 
                 Registrar
                </button>
            </form>
            <p className='flex gap-x-2 justify-between'>
                    Si ya tines cuenta <Link className='text-sky-500' to='/login'>Inicia secion</Link>
            </p>
        </div>
    )
}
export default RegisterPage; 