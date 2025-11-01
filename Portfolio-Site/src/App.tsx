import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header'
import Hero from './Hero'
import About from "./About";

import './App.css'


function App() {


  return (
    <>
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/contact" element={<Hero/>} />
        </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
