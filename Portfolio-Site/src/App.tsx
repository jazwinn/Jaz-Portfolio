import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header'
import Hero from './Hero'
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";



function App() {


  return (
    <>
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/Projects" element={<Project/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
