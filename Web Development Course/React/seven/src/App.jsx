import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Products from "./Pages/Products"
import ProductDetails from "./Pages/ProductDetails"


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/all-products" element={<Products/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
