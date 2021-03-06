import React from "react";
import "./index.css";

// purely the looks of the modal without the functionality
function Projects() {
    return (
        <div>
            <div>
                <div className="row">
                     <ul className="list">
                        <li>
                            <button type="button" className="btn" data-toggle="modal" data-target="#buzzModal">
                                <img className="work-images img-thumbnail" id="work" alt="" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/buzzkill.png?raw=true"/>
                            </button>
                            <span className="sr-only">(current)</span>
                        </li><li>
                            <button type="button" className="btn" data-toggle="modal" data-target="#hotModal">
                                <img className="work-images img-thumbnail" id="work" alt="" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/hotrestaurant.png?raw=true"/>
                            </button>
                            <span className="sr-only">(current)</span>
                        </li>
                        <li>
                            <button type="button" className="btn" data-toggle="modal" data-target="#portModal">
                                <img className="work-images img-thumbnail" id="work" alt="" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/portfolio.png?raw=true"/>
                            </button>
                            <span className="sr-only">(current)</span>
                        </li>
                    </ul>
                </div>
                <div className="w-100"></div>
                <div className="row">
                    <ul className="list">
                        <li>
                            <button type="button" className="btn" data-toggle="modal" data-target="#fitModal">
                                <img className="work-images img-thumbnail" id="work" alt="" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/fitness-tracker.png?raw=true"/>
                            </button>
                            <span className="sr-only">(current)</span>
                        </li>
                        <li>
                            <button type="button" className="btn" data-toggle="modal" data-target="#witsModal">
                                <img className="work-images img-thumbnail" id="work" alt="" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/wits-end.png?raw=true"/>
                            </button>
                            <span className="sr-only">(current)</span>
                        </li>
                        <li>
                            <button type="button" className="btn" data-toggle="modal" data-target="#workModal">
                                <img className="work-images img-thumbnail" id="work" alt="" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/worker-direct.png?raw=true"/
                            ></button>
                            <span className="sr-only">(current)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects;


