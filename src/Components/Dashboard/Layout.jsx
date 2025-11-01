import { Outlet,Link } from "react-router-dom"
function Layout() {
  return (
    <>
        <Link to="edit-profile"><button>Edit Profile</button></Link>


    
        <Outlet/>
    </>

  )
}

export default Layout