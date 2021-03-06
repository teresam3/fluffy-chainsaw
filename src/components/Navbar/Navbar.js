import React from "react";
import "./index.css"


function Navbar() {
    return (
        <div >
            <nav className="navbar navbar-expand-sm fixed-top navbar-light justify-content-center">
                <ul className="list">
                    <li className="nav-item">
                        <button type="button" className="btn btn-primary about" data-toggle="modal" data-target="#aboutModal">about</button>
                        <span className="sr-only">(current)</span>
                    </li>
                    <li>
                        <h1>
                            <a className="navbar-brand name-logo justify-content-center" href="./index.html"><img alt="teresa maldonado" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/TeresaMaldonado2.png?raw=true"/></a>
                        </h1>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-primary about" data-toggle="modal" data-target="#contactModal">contact</button>
                        <span className="sr-only">(current)</span>
                    </li> 
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;