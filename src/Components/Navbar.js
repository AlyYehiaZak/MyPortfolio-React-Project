import React from "react";
import { useState, useEffect } from 'react';
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 25) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const LinkedinClick = () => {
        window.location.href="https://www.linkedin.com/in/aly-yehia-zakaria/";
    };

    const GithubClick = () => {
        window.location.href="https://github.com/AlyYehiaZak";
    };

    const cvClick = () => {
        window.location.href="https://drive.google.com/file/d/1uM10-dSneoGxJzZIwTEWfaTcuOBRzPje/view?usp=sharing";
    };


    return (
        <>
        <nav className={`navbar navbar-expand-lg ${scrolled ? 'my-bg-primary' : ''} navbar-dark fixed-top navbar_transition`}>
            <div className="container-xl container-fluid">

                <a className="navbar-brand ms-lg-4" href="#">
                    <img className="navbar_transition" src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="logo" style={{width:`${scrolled ? '70px' : '100px'}`}}/>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link fs-5 me-4 myFontFamily" href="#welcome_section">Welcome</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5 me-4 myFontFamily" href="#skills_section">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5 me-4 myFontFamily" href="#achievements_section">Achievements</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5 me-4 myFontFamily" href="#getintouch_section">Get In Touch</a>
                        </li>
                    </ul>

                    <div className="d-flex">

                        <div className="p-3 me-3 ms-xl-5 navbar_icons_container" onClick={LinkedinClick}>
                            <div className="navbar_icons_background">
                                <i className="fa-brands fa-linkedin-in fs-4 navbar_icons"></i>
                            </div>
                        </div>

                        <div className="p-3 me-3 navbar_icons_container" onClick={GithubClick}>
                            <div className="navbar_icons_background">
                                <i className="fa-brands fa-github fs-4 navbar_icons"></i>
                            </div>
                        </div>

                        <div className="p-3 me-3 navbar_icons_container" onClick={cvClick}>
                            <div className="navbar_icons_background">
                                <div className="navbar_icons">
                                    <i className="fa-solid fa-c cv_icon"></i>
                                    <i className="fa-solid fa-v cv_icon"></i>
                                </div>
                            </div>
                        </div>

                        <div className="navbar_button_container ms-xl-4" onClick={() =>{window.location.href = `#letsconnect_section`}}>
                            <div className="navbar_button_background">
                                <p className="navbar_button_text fs-5 myFontFamily">Let's Connect</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;