import React from "react";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { NavLink } from "react-router-dom";

function PageNotFound() {
    return (
        <>
            <div className="pagenotfound_section">
                <div class="alert alert-danger container">
                    <strong>Page Not Found!</strong> You should <NavLink to="/" class="alert-link">Go Back</NavLink>.
                </div>
            </div>
        </>
    );
}

export default PageNotFound;