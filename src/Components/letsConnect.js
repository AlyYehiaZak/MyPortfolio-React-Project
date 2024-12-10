import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function LetsConnect() {
    return (
        <>
            <div id="letsconnect_section" className="letsconnect_section bg-white rounded-5">
                <div className="container row mx-auto p-5">

                    <div className="col-12 col-lg-6">
                        <p className="fs-3 myFontFamily fw-bold mb-0">Have a project in mind or Want to collaborate on something amazing? Drop your Email, and let's connect.</p>
                    </div>

                    <div className="col-12 col-lg-6 d-flex">
                        <div class="input-group align-content-center mt-4 mt-lg-0">
                            <input type="text" class="form-control form-control-lg rounded-start-3" placeholder="Email Address"/>
                            <button class="btn letsconnect_button text-white rounded-end-3">Let's Connect</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default LetsConnect;