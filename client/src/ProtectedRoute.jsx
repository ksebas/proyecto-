import { Navigate , Outlet} from "react-router-dom";
import { useAuth } from "./context/AuthContest"


function ProtectedRoute() {
    const {loading,isAuthenticated} = useAuth();
    // console.log(loading, isAuthenticated)


    if(loading) return <h1>loading ...</h1>
    if(!loading && !isAuthenticated) return <Navigate to='/login' replace />;

    return <Outlet />
      
}

export default ProtectedRoute