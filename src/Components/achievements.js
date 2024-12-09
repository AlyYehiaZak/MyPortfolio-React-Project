import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { NavLink, Outlet } from "react-router-dom";

function Achievements() {

    return (
        <>
            <div id="achievements_section" className="bg-black">
                <div className="text-center pt-5">
                    <h2 className="text-white myFontFamily fs-1">My Achievements</h2>
                    <p className="my-text-secondary myFontFamily mt-3 mb-1">I am a Highly motivated and skilled student with a passion for personal growth.</p>
                    <p className="my-text-secondary myFontFamily">Here is a snippet of my achievements.</p>
                    
                    <div className="mx-auto w-75 row mt-4">

                        <NavLink to="education" className={({ isActive }) => `${isActive ? "achievements_button_active" : ""} my-bg-secondary border border-white rounded-start-5 col-3 text-decoration-none d-flex justify-content-center`}>
                            <p className="achievements_button_text text-white myFontFamily align-content-center mb-0">My Education</p>
                        </NavLink>

                        <NavLink to="courses" className={({ isActive }) => `${isActive ? "achievements_button_active" : ""} my-bg-secondary border border-white border-bottom border-top col-3 text-decoration-none d-flex justify-content-center`}>
                            <p className="achievements_button_text text-white myFontFamily align-content-center mb-0">Programming courses Learnt</p>
                        </NavLink>

                        <NavLink to="projects" className={({ isActive }) => `${isActive ? "achievements_button_active" : ""} my-bg-secondary border border-white border-bottom border-top col-3 text-decoration-none d-flex justify-content-center`}>
                            <p className="achievements_button_text text-white myFontFamily align-content-center mb-0">My Projects</p>
                        </NavLink>
                        
                        <NavLink to="certificates" className={({ isActive }) => `${isActive ? "achievements_button_active" : ""} my-bg-secondary border border-white rounded-end-5 col-3 text-decoration-none d-flex justify-content-center`}>
                            <p className="achievements_button_text text-white myFontFamily align-content-center mb-0">My Certificates</p>
                        </NavLink>

                    </div>

                </div>

                <Outlet/>
            </div>
        </>
    );
}

export default Achievements;