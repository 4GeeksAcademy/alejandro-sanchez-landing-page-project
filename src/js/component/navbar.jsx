import React from "react";

const Navbar = () => {
    return (
    <nav className="navbar navbar-dark navbar-expand-lg" style={{ background: "#474747" }}>
    <div className="container-xxl">
        <div>
            <a className="navbar-brand" href="#">Bootstrap</a>
        </div>
        <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link" href="#">About</a>
                    <a className="nav-link" href="#">Services</a>
                    <a className="nav-link" href="#">Contact</a>
                </div>
            </div>
        </div>
    </div>
    </nav>
    );
};

export default Navbar;