import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Welcome from "./Components/Welcome";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router basename="/MyPortifolio-React-Project">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Welcome/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
