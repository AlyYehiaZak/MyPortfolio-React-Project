import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./Components/navbar";
import Welcome from "./Components/welcome";
import Education from "./Components/education";
import Courses from "./Components/courses";
import Projects from "./Components/projects";
import Certificates from "./Components/certificates";
import PageNotFound from "./Components/pageNotFound";

function App() {
  return (
    <>
      <Router basename="/MyPortfolio-React-Project">
        <Navbar/>
        <Routes>

          <Route path="/" element={<Welcome/>}>
            <Route path="education" element={<Education/>}/>
            <Route path="courses" element={<Courses/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="certificates" element={<Certificates/>}/>
          </Route>

          <Route path="*" element={<PageNotFound/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
