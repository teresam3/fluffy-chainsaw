import React from "react";
import "./index.css";

function Footer() {
    return (
        <div>
            <div className="footer-nav container-fluid navbar-expand-lg">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <p className="nav-link" >Have questions? Let's chat.<br/>teresaemaldonado@gmail.com</p>
                </li>
            <div className="w-100"></div>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.linkedin.com/in/teresa-maldonado-917340181/"><img alt="LinkedIn" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/in.png?raw=true"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/teresam3"><img alt="Github" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/git.png?raw=trueg"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://mail.google.com/"><img alt="email" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/mail.png?raw=true"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://docs.google.com/document/d/e/2PACX-1vR9vjjXxZbfxGFXaYnziHBsuR1TrFGwaD2U6YP4c9sRupmu8gcnNnGrXGRa5j09uNt40qNhXagMxp7U/pub" download><img className="resume" alt="resume" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/icons8-download-24.png?raw=true"/></a>
                </li>
            </ul>
            </div>
        </div>
    )
};

export default Footer;