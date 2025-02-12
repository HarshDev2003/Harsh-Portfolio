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
                text={`A passionate Software Engineer and Freelancer with Expertise in Full-stack Development, crafting high-performance Web Apps and intuitive user experiences.`}
                highlightWords={[
                  "Harsh",
                  "Software",
                  "Freelancer",
                  "Expertise",
                  "Full",
                  "stack",
                  "Web",
                  "Apps",
                  "Engineer",
                  "Development"
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
