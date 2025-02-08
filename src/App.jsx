// import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router";
import Navbar from "./components/Navbar"
import Harsh from "./components/Harsh";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Harsh />
          </>
        }
      />
     
    </Routes>
  </BrowserRouter>
  )
}

export default App