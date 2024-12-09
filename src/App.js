import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Welcome from "./Components/welcome";
import Navbar from "./Components/navbar";
import Skills from "./Components/skills";

function App() {
  return (
    <>
      <Router basename="/MyPortifolio-React-Project">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Welcome/>}>
            <Route path="skills" element={<Skills/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
