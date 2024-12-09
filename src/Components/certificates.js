import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Certificates() {

    return (
        <>
            <div className="container row mx-auto mt-5">

                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                    <div className="container-fluid rounded-5 achievements_slots_container p-0">
                        <img className="achievements_slots_img rounded-5" src={`${process.env.PUBLIC_URL}/images/certificates/seffront.jpg`} alt="sef front end"/>

                        <div className="achievements_slots_overlay rounded-5 d-flex justify-content-center">
                            <div className="align-content-center text-white text-center fs-4">
                                <p className="mb-0 myFontFamily fw-bold">SEF FrontEnd Course Completion</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                    <div className="container-fluid rounded-5 achievements_slots_container p-0">
                        <img className="achievements_slots_img rounded-5" src={`${process.env.PUBLIC_URL}/images/certificates/ielts.png`} alt="ielts"/>

                        <div className="achievements_slots_overlay rounded-5 d-flex justify-content-center">
                            <div className="align-content-center text-white text-center fs-4">
                                <p className="mb-0 myFontFamily fw-bold">British Council IELTS Test Report</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                    <div className="container-fluid rounded-5 achievements_slots_container p-0">
                        <img className="achievements_slots_img rounded-5" src={`${process.env.PUBLIC_URL}/images/certificates/os.jpg`} alt="os certificate"/>

                        <div className="achievements_slots_overlay rounded-5 d-flex justify-content-center">
                            <div className="align-content-center text-white text-center fs-4">
                                <p className="mb-0 myFontFamily fw-bold">Operating Systems Course Top Student</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                    <div className="container-fluid rounded-5 achievements_slots_container p-0">
                        <img className="achievements_slots_img rounded-5" src={`${process.env.PUBLIC_URL}/images/certificates/problemsolving.png`} alt="problem solving"/>

                        <div className="achievements_slots_overlay rounded-5 d-flex justify-content-center">
                            <div className="align-content-center text-white text-center fs-4">
                                <p className="mb-0 myFontFamily fw-bold">Problem Solving Level 2 Completion</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                    <div className="container-fluid rounded-5 achievements_slots_container p-0">
                        <img className="achievements_slots_img rounded-5" src={`${process.env.PUBLIC_URL}/images/certificates/javaphp.png`} alt="java php"/>

                        <div className="achievements_slots_overlay rounded-5 d-flex justify-content-center">
                            <div className="align-content-center text-white text-center fs-4">
                                <p className="mb-0 myFontFamily fw-bold">Java PHP Udemy Course Completion</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Certificates;