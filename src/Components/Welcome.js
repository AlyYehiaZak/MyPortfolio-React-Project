import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { ReactTyped } from 'react-typed';
import Skills from "./skills";
import Achievements from "./achievements";
import GetInTouch from "./getInTouch";
import Footer from "./footer";

function Welcome() {
  return (
    <>
      <div id="welcome_section" className="welcome_background">
        <div className="welcome_background_overlay"></div>
        <div className="welcome_content">

          <div className="row w-100" style={{ paddingTop: '160px'}}>

            <div className="col-12 col-xl-6 mb-5">
              <div className="ms-4 ms-sm-5 mt-3 d-inline-block">
                <div className="border border-2 border-white py-3 px-4 fs-4 text-white myFontFamily welcome_header me-xl-5">
                  Welcome To My Portfolio
                </div>
              </div>
              <div className="text-white myFontFamily mt-4 ms-5 fw-bold welcome_dynamic_text">
                <span>Hi! I'm Aly Yehia Zakaria, A computer science student </span>
                <ReactTyped
                  strings={[
                    "with a dual degree...",
                    "at Ain Shams University.", 
                    "at University of East London.",
                  ]}
                  typeSpeed={60}
                  backSpeed={60}
                  backDelay={1500}
                  loop = {true}
                  showCursor = {true}
                />
              </div>
              <div className="fs-5 mt-3 ms-5 my-text-secondary myFontFamily">
                I am a Software Engineer and a fullstack web developer.
              </div>
              <div className="mt-5 ms-5">
                <a className="text-white fs-4 fw-bold text-decoration-none myFontFamily" href="#letsconnect_section">Let's Connect <i class="fa-regular fa-circle-right"></i></a>
              </div>
            </div>

            <div className="col-12 col-xl-6 d-flex justify-content-center align-content-center welcome_img_container">
              <img className="welcome_img me-xl-5" src={`${process.env.PUBLIC_URL}/images/pc.png`} alt="PC" />
            </div>

          </div>

        </div>
      </div>

      <Skills/>
      <Achievements/>
      <GetInTouch/>
      <Footer/>
    </>
  );
}

export default Welcome;