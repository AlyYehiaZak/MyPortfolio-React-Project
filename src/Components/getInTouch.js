import React, { useState } from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import LetsConnect from "./letsConnect";

function GetInTouch() {

    const [SubjectValue , SetSubjectValue] = useState("")
    const [BodyValue , SetBodyValue] = useState("")

    const sendMail = () =>{
        const email = 'alyyehiazak@gmail.com';
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(SubjectValue)}&body=${encodeURIComponent(BodyValue)}`
    }

    return (
        <>
            <div id="getintouch_section" className="getintouch_section">
                
                <div className="container-fluid row mx-auto pt-4">

                    <div className="col-12 col-lg-6 d-flex justify-content-center pe-0">
                        <img className="align-content-center getintouch_image" src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="avatar" />
                    </div>

                    <div className="col-12 col-lg-6 pe-0">
                        <h2 className="fs-1 myFontFamily text-white fw-bold mt-3">Get In Touch</h2>
                        <p className="fs-5 myFontFamily mt-4 ms-1"><span className="text-white"><i class="fa-solid fa-location-dot"></i> Address : </span><span className="my-text-secondary"> Masr El Gedida , Cairo , Egypt</span></p>
                        <p className="fs-5 myFontFamily ms-1"><span className="text-white"><i class="fa-solid fa-phone"></i> Phone Number : </span><span className="my-text-secondary"> +20 1157115107</span></p>
                        <p className="fs-5 myFontFamily ms-1"><span className="text-white"><i class="fa-solid fa-envelope"></i> Email Address : </span><span className="my-text-secondary"> alyyehiazak@gmail.com</span></p>
                        <h2 className="fs-1 myFontFamily text-white fw-bold mt-4">Want to mail me?</h2>
                        <input type="text" className="form-control form-control-lg w-50 p-3 rounded-4 border border-white getintouch_input mt-3" placeholder="Subject" value={SubjectValue} onChange={(event) => SetSubjectValue(event.target.value)}/>
                        <textarea class="form-control form-control-lg rounded-4 border border-white getintouch_input mt-3 getintouch_textarea" rows="5" placeholder="Content" value={BodyValue} onChange={(event) => SetBodyValue(event.target.value)}></textarea>
                        <button onClick={sendMail} className="btn btn-lg bg-white text-black rounded-0 my-3 ms-1 px-5 py-3 myFontFamily fw-bold">Send</button>
                    </div>

                </div>

                <LetsConnect/>
            </div>
        </>
    );
}

export default GetInTouch;