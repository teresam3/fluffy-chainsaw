import React from "react";


function Navbar() {
    return (
        <div>
            <nav class="navbar">
                <div class="col-md-8 col-sm-12 col-lg-8">
                    <a class="navbar-brand name-logo" href="./index.html">teresa maldonado</a>
                </div>
                <div class="col-md-8 col-sm-12 col-lg-4">
                <ul class="navbar-nav" id="btn">
                    <li class="nav-item">
                        <a class="nav-link">
            {/* <!-- Button trigger about modal --> */}
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#aboutModal">about</button>
                        <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
            {/* <!-- Button trigger contact modal --> */}
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#contactModal">contact</button>
                        <span class="sr-only">(current)</span>
                        </a>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;