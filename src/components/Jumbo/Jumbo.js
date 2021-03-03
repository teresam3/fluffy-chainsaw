import React from "react";
import "./index.css";

function Jumbo() {
    return (
        <div className="jumbotron">
            <div className="container-fluid">
                <ul className="img">
                    <li className="html">
                        <img alt="html-5 logo" src="./images/icons8-html-5-48 (1).png"/>
                    </li>
                    <li className="java">
                        <img alt="java logo" src="./images/icons8-java-48.png"/>
                    </li>
                    <li className="js"> 
                        <img alt="javascript logo" src="./images/icons8-javascript-logo-100.png"/>
                    </li>
                    <li className="mysql">
                        <img alt="mysql logo" src="./images/icons8-mysql-logo-100.png"/>
                    </li>
                    <li className="post">
                        <img alt="postgres logo" src="./images/icons8-postgresql-100.png"/>
                    </li>
                    <li className="python">
                        <img alt="python logo" src="./images/icons8-python-52.png"/>
                    </li>
                    <li className="react">
                        <img alt="react logo" src="./images/icons8-react-128 (2).png"/>
                    </li>
                </ul>
            </div>
        </div> 
    )
}

export default Jumbo;