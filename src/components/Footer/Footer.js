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
                    <a className="nav-link" href="https://docs.google.com/document/d/1YmWgFEVT28W020Ey-c6PX-TaYXxzZ82VPxcn8p66pQk/edit?usp=sharing"download><img className="resume" alt="resume" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/icons8-download-24.png?raw=true"/></a>
                </li>
            </ul>
            </div>
        </div>
    )
};

export default Footer;