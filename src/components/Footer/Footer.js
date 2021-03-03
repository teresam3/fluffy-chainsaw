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
                    <a className="nav-link" href="https://www.linkedin.com/in/teresa-maldonado-917340181/"><img alt="LinkedIn" src="./images/in.png"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/teresam3"><img alt="Github" src="./images/git.png"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://mail.google.com/"><img alt="email" src="./images/mail.png"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://docs.google.com/document/d/1YmWgFEVT28W020Ey-c6PX-TaYXxzZ82VPxcn8p66pQk/edit?usp=sharing"download><img className="resume" alt="resume" src="./images/icons8-download-24.png"/></a>
                </li>
            </ul>
            </div>
        </div>
    )
};

export default Footer;