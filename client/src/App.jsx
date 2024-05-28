import {BrowserRouter, Route , Routes} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './context/AuthContest';
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';
import TaskFromPage from './pages/TaskFromPage';
import Profile from './pages/Profile';
import ProtectedRoute from './ProtectedRoute'
import { TaskProvier } from './context/TasksContext';
import Navbar from './components/navbar';

function App() {
  return (
   
     <AuthProvider>
       <TaskProvier>
        <BrowserRouter>
            <main className='conatiner mx-auto px-10'>
            <Navbar/>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route element={<ProtectedRoute/>}>
                  <Route path="/tasks" element={<TasksPage/>} />
                  <Route path="/add-task" element={<TaskFromPage/>} />
                  <Route path="/tasks/:id" element={<TaskFromPage/>} />
                  <Route path="/profile" element={<Profile/>} />
                </Route>
            </Routes>
            </main>
        </BrowserRouter>
       </TaskProvier>
     </AuthProvider>
   
  )
}

export default App
