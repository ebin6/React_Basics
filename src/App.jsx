import AllMovies from "./Components/Pages/All_Movies/AllMovies"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Pages/Home/Home"
import Register from "./Components/Pages/Register/Register"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Dashboard from "./Components/Dashboard/Dashboard"
import EditProfile from "./Components/Dashboard/EditProfile"
import Layout from "./Components/Dashboard/Layout"
import Counter from "./Components/Counter"

function App() {


  return (

    <div>
        <BrowserRouter>
          <Navbar/>
          {/* <Counter/> */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/all-movies" element={<AllMovies/>}/>
            <Route path="/dashboard" element={<Layout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="edit-profile" element={<EditProfile/>}/>
            </Route>
          </Routes>

        </BrowserRouter>



      {/* <Navbar/>
      <Home/>
      <Register/>
      <AllMovies/> */}
    </div>
  )
}

export default App
