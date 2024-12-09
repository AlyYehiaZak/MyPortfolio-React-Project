import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Education() {

    return (
        <>
            <div className="container row mx-auto mt-5">

                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                    <div className="container-fluid rounded-5 achievements_slots_container p-0">
                        <img className="achievements_slots_img rounded-5" src={`${process.env.PUBLIC_URL}/images/education/ainshams.jpg`} alt="ain shams"/>

                        <div className="achievements_slots_overlay rounded-5 d-flex justify-content-center">
                            <div className="align-content-center text-white text-center fs-4">
                                <p className="mb-0 myFontFamily fw-bold">Faculty of Computer Science</p>
                                <p className="myFontFamily fw-bold">Ain Shams University</p>
                                <p className="mb-0">2021-2025</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                    <div className="container-fluid rounded-5 achievements_slots_container p-0">
                        <img className="achievements_slots_img rounded-5" src={`${process.env.PUBLIC_URL}/images/education/uel.jpg`} alt="uel"/>

                        <div className="achievements_slots_overlay rounded-5 d-flex justify-content-center">
                            <div className="align-content-center text-white text-center fs-4">
                                <p className="mb-0 myFontFamily fw-bold">Faculty of Computer Science</p>
                                <p className="myFontFamily fw-bold">University of East London</p>
                                <p className="mb-0">2021-2025</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                    <div className="container-fluid rounded-5 achievements_slots_container p-0">
                        <img className="achievements_slots_img rounded-5" src={`${process.env.PUBLIC_URL}/images/education/britishCouncil.avif`} alt="Ielts"/>

                        <div className="achievements_slots_overlay rounded-5 d-flex justify-content-center">
                            <div className="align-content-center text-white text-center fs-4">
                                <p className="mb-0 myFontFamily fw-bold">English IELTS Exam</p>
                                <p className="myFontFamily fw-bold">British Council</p>
                                <p className="mb-0">Band Score 7.0</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                    <div className="container-fluid rounded-5 achievements_slots_container p-0">
                        <img className="achievements_slots_img rounded-5" src={`${process.env.PUBLIC_URL}/images/education/nis.jpg`} alt="nis"/>

                        <div className="achievements_slots_overlay rounded-5 d-flex justify-content-center">
                            <div className="align-content-center text-white text-center fs-4">
                                <p className="mb-0 myFontFamily fw-bold">High School Diploma</p>
                                <p className="myFontFamily fw-bold">Nermien Ismail Language School</p>
                                <p className="mb-0">2007-2021</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Education;