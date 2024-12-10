import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Footer() {

    const LinkedinClick = () => {
        window.location.href="https://www.linkedin.com/in/aly-yehia-zakaria/";
    };

    const GithubClick = () => {
        window.location.href="https://github.com/AlyYehiaZak";
    };

    const cvClick = () => {
        window.location.href="https://drive.google.com/file/d/17sfKMoHG2_Qw631dJQHu1IBDm7C0MMl9/view?usp=sharing";
    };

    return (
        <>
            <div className="my-bg-primary footer_section">
                <div className="container-md container-fluid mx-auto d-flex justify-content-between gap-3">

                    <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="logo" style={{width: "110px"}}/>

                    <div>

                        <div className="d-flex justify-content-end">
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
                        </div>

                        <div className="mt-3">
                            <p className="myFontFamily my-text-secondary">--Copyright 2024-- all rights reserved here by Aly Yehia Zakaria</p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Footer;