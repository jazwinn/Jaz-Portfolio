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
          <Route path="/Jaz-Portfolio" element={<Hero/>} />
          <Route path="/Jaz-Portfolio/About" element={<About/>} />
          <Route path="/Jaz-Portfolio/contact" element={<Contact/>} />
          <Route path="/Jaz-Portfolio/Projects" element={<Project/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
