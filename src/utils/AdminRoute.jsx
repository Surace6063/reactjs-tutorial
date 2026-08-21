import { Navigate, Outlet } from "react-router-dom"

const AdminRoute = () => {
    const isLoggedIn = true
    const isAdmin = true
    
    // if user is not logggedIn, redirect to login page
    if(!isLoggedIn) return <Navigate to="/login" replace />

    // if user is loggedIn but not admin, redirect to home page
    if(!isAdmin) return <Navigate to="/" replace />
  
    // if user is loggedIn and also is admin, redirect user to protected route
  return <Outlet />
}
export default AdminRoute