import React from "react";

function Footer() {
    return (
        <div>
            <div className="footer-nav container-fluid navbar-expand-lg">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <p className="nav-link" >Have questions? Let's chat.<br/> teresa@teresamaldonado.com</p>
                </li>
            <div className="w-100"></div>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.linkedin.com/in/teresa-maldonado-917340181/"><img alt="LinkedIn" src="../public/images/in.png"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/teresam3"><img alt="Github" src="../public/images/git.png"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://mail.google.com/"><img alt="email" src="../public/images/mail.png"/></a>
                </li>
            </ul>
            </div>
        </div>
    )
};

export default Footer;