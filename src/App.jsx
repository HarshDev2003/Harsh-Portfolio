// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import { NavbarDefault } from "./components/Navbar";
import Home from "./pages/Home";
import TrueFocus from "./components/Preloader";
import Steps from "./pages/Steps";
import FallingText from "./pages/FallingText";

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
        <Route
          path="/timeline"
          element={
            <>
              <NavbarDefault />
              <Steps />
            </>
          }
        />
        <Route
          path="/falling-text"
          element={
            <>
              <NavbarDefault />
              <FallingText
                text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
                highlightWords={[
                  "React",
                  "Bits",
                  "animated",
                  "components",
                  "simplify",
                ]}
                highlightClass="highlighted"
                trigger="hover"
                backgroundColor="transparent"
                wireframes={false}
                gravity={0.56}
                fontSize="2rem"
                mouseConstraintStiffness={0.9}
              />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
