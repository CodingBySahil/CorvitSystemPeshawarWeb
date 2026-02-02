import { Route, Routes } from "react-router-dom"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Navbar from "./Components/Navbar"
import NotFound from "./Pages/NotFound"
import Services from "./Pages/Services"


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<About/>} path='/about'/>
        <Route element={<Contact/>} path="/contact"/>
        <Route element={<Services/>} path="/services"/>
        <Route element={<NotFound/>} path="*"/>
      </Routes>
      
    </div>
  )
}

export default App