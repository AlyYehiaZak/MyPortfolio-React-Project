import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Projects() {

    return (
        <>
            <div className="container row mx-auto mt-5">

                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                    <div className="container-fluid rounded-5 achievements_slots_container p-0">
                        <img className="achievements_slots_img rounded-5" src={`${process.env.PUBLIC_URL}/images/projects/portfolio.png`} alt="portfolio"/>

                        <div className="achievements_slots_overlay rounded-5 d-flex justify-content-center">
                            <div className="align-content-center text-white text-center fs-4">
                                <p className="mb-0 myFontFamily fw-bold">Portfolio Website</p>
                                <p className="mb-0">React Node js/BOOTSTRAP</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                    <div className="container-fluid rounded-5 achievements_slots_container p-0">
                        <img className="achievements_slots_img rounded-5" src={`${process.env.PUBLIC_URL}/images/projects/adidas.png`} alt="adidas project"/>

                        <div className="achievements_slots_overlay rounded-5 d-flex justify-content-center">
                            <div className="align-content-center text-white text-center fs-4">
                                <p className="mb-0 myFontFamily fw-bold">Adidas Store Website</p>
                                <p className="myFontFamily">HTML/CSS/JS/BOOTSTRAP</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                    <div className="container-fluid rounded-5 achievements_slots_container p-0">
                        <img className="achievements_slots_img rounded-5" src={`${process.env.PUBLIC_URL}/images/projects/nasa.png`} alt="nasa project"/>

                        <div className="achievements_slots_overlay rounded-5 d-flex justify-content-center">
                            <div className="align-content-center text-white text-center fs-4">
                                <p className="mb-0 myFontFamily fw-bold">Nasa Website</p>
                                <p className="myFontFamily">HTML/CSS/BOOTSTRAP</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                    <div className="container-fluid rounded-5 achievements_slots_container p-0">
                        <img className="achievements_slots_img rounded-5" src={`${process.env.PUBLIC_URL}/images/projects/gymclub.png`} alt="gym club"/>

                        <div className="achievements_slots_overlay rounded-5 d-flex justify-content-center">
                            <div className="align-content-center text-white text-center fs-4">
                                <p className="mb-0 myFontFamily fw-bold">Gym Club Website</p>
                                <p className="myFontFamily">HTML5/CSS</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                    <div className="container-fluid rounded-5 achievements_slots_container p-0">
                        <img className="achievements_slots_img rounded-5" src={`${process.env.PUBLIC_URL}/images/projects/netflix.png`} alt="netflix"/>

                        <div className="achievements_slots_overlay rounded-5 d-flex justify-content-center">
                            <div className="align-content-center text-white text-center fs-4">
                                <p className="mb-0 myFontFamily fw-bold">Netflix Website</p>
                                <p className="myFontFamily">HTML/CSS</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                    <div className="container-fluid rounded-5 achievements_slots_container p-0">
                        <img className="achievements_slots_img rounded-5" src={`${process.env.PUBLIC_URL}/images/projects/recipeme.png`} alt="recipeme"/>

                        <div className="achievements_slots_overlay rounded-5 d-flex justify-content-center">
                            <div className="align-content-center text-white text-center fs-4">
                                <p className="mb-0 myFontFamily fw-bold">RecipeMe</p>
                                <p className="myFontFamily mb-0 fw-bold">Android Application</p>
                                <p className="mb-0">JAVA</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                    <div className="container-fluid rounded-5 achievements_slots_container p-0">
                        <img className="achievements_slots_img rounded-5" src={`${process.env.PUBLIC_URL}/images/projects/soda.png`} alt="soda"/>

                        <div className="achievements_slots_overlay rounded-5 d-flex justify-content-center">
                            <div className="align-content-center text-white text-center fs-4">
                                <p className="mb-0 myFontFamily fw-bold">Soda Billboard AD</p>
                                <p className="mb-0">BLENDER</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                    <div className="container-fluid rounded-5 achievements_slots_container p-0">
                        <img className="achievements_slots_img rounded-5" src={`${process.env.PUBLIC_URL}/images/projects/supermarket.png`} alt="supermarket"/>

                        <div className="achievements_slots_overlay rounded-5 d-flex justify-content-center">
                            <div className="align-content-center text-white text-center fs-4">
                                <p className="mb-0 myFontFamily fw-bold">Supermarket Management System</p>
                                <p className="mb-0">C#</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                    <div className="container-fluid rounded-5 achievements_slots_container p-0">
                        <img className="achievements_slots_img rounded-5" src={`${process.env.PUBLIC_URL}/images/projects/smartcar.jpg`} alt="smartcar"/>

                        <div className="achievements_slots_overlay rounded-5 d-flex justify-content-center">
                            <div className="align-content-center text-white text-center fs-4">
                                <p className="mb-0 myFontFamily fw-bold">Smart Car</p>
                                <p className="mb-0">ARDUINO</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Projects;