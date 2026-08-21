import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    const isLoggedIn = true
   
    // if user is not loggedIn, redirect user to login page
   if(!isLoggedIn){
     return <Navigate to="/login" replace  />
   }
  
  // else let them access protected page 
  return <Outlet />
}
export default ProtectedRoute