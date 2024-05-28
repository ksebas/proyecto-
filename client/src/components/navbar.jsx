import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContest";


function Navbar() {
  const {isAuthenticated , logout ,user} = useAuth();
 
    return (
    <nav className="bg-zinc-700 mb-3 flex justify-between py-5 px-10">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <ul className="flex gap-x-2">
           {isAuthenticated ? (
            <>
                <li>
                    welcome {user.username}
                </li>
                <li>
                    <Link to="/add-task" className="bg-indigo-500 px-4 py-1 rounded-sm">add task</Link>
                </li>
                <li>
                    <Link to="/" onClick={()=>{
                        logout();
                    }}>logout</Link>
                </li>
            </>
           ) :(
            <>
            <li className="">
                <Link to="/login" className="bg-indigo-500 px-4 py-1 rounded-sm">Login </Link>
            </li>
            <li className="">
                <Link to="/register" className="bg-indigo-500 px-4 py-1 rounded-sm">Register </Link>
            </li>
            </>
           )}
        </ul>
    </nav>
  )
}

export default Navbar