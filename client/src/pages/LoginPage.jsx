import {useForm} from 'react-hook-form';
import { useAuth } from '../context/AuthContest';
import { Link , useNavigate } from 'react-router-dom';
import {useEffect} from 'react'

function LoginPage() {
    const {register , handleSubmit , formState: {errors}} = useForm();

    const {signin ,errors:signinErrors, isAuthenticated}  =  useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) =>{
        signin(data);
    })

    useEffect(() =>{
        if(isAuthenticated) navigate("/tasks");
    },[isAuthenticated])

    return(
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className="bg-zinc-800 max-w-md p-10 rounded-md">

                <h1 className="text-3xl font-bold text-center">Login</h1>

                <p className="text-gray-500 text-center">Sign in to your account</p>
                {
                    signinErrors.map((error , i )=>(
                        <div className='bg-red-600 p-2 m-1 text-white' key={i}>
                            {error}
                        </div>
                    ))
                }
                <form  onSubmit={onSubmit}>
                    <input type="email" {...register("email",{required: true})} className='w-full bg-zinc-700 text-white px-4 rounded-md m-1' placeholder='email'/>
                    {errors.email && <p className='text-red-500'> Email requerido </p>}

                    <input type="password" {...register("password",{required: true})} className='w-full bg-zinc-700 text-white px-4 rounded-md m-1' placeholder='password'/>
                    {errors.password && <p className='text-red-500'> contraseña requerida </p>}

                    <button type="submit" className='bg-gray-50 text-black border-r-2 m-1'> 
                    Iniciar sesion
                    </button>
                </form>
                <p className='flex gap-x-2 justify-between'>
                    No tienes cuenta <Link className='text-sky-500' to='/register'>Registrate</Link>
                </p>
            </div>
        </div>
    )
}
export default LoginPage;