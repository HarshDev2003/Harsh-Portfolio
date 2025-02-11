// import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router";
import  { NavbarDefault } from "./components/Navbar"
import Home from "./pages/Home";
import TrueFocus from "./components/Preloader";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route
        path="/"
        element={
          <>
            <NavbarDefault />
            <Home />
        
          </>
        }
      />
     <Route
        path="/preloader"
        element={
          <>
           <TrueFocus 
sentence="True Focus"
manualMode={false}
blurAmount={5}
borderColor="red"
animationDuration={2}
pauseBetweenAnimations={1}
/>
            
        
          </>
        }
      />
    </Routes>
  </BrowserRouter>
  )
}

export default App