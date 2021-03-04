import React from "react";
import "./index.css";

// purely the looks of the modal without the functionality
function Projects() {
    return (
        <div>
            <div className="container work-grid">
                <div className="row">
                    <div className="work col">
                    <a href="https://github.com/csbryant/HotRestaurant"><img className="work-images img-thumbnail" id="work" alt="" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/buzzkill.png?raw=true"/></a>
                    </div>
                    <div className="work col">
                        <a href="https://github.com/csbryant/HotRestaurant"><img className="work-images img-thumbnail" id="work" alt="" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/hotrestaurant.png?raw=true"/></a>
                    </div>
                    <div className="work col">
                        <a href="https://github.com/teresam3/teresa-maldonado"><img className="work-images img-thumbnail" id="work" alt="" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/portfolio.png?raw=true"/></a>
                    </div>
                </div>
                <div className="w-100"></div>
                <div className="row">
                    <div className="work col">
                        <a href="https://github.com/teresam3/no-pain-no-gain"><img className="work-images img-thumbnail" id="work" alt="" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/fitness-tracker.png?raw=true"/></a>
                    </div>
                    <div className="work col">
                        <a href="https://github.com/teresam3/wits-end"><img className="work-images img-thumbnail" id="work" alt="" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/wits-end.png?raw=true"/></a>
                    </div>
                    <div className="work col">
                        <a href="https://github.com/teresam3/worker-direct"><img className="work-images img-thumbnail" id="work" alt="" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/worker-direct.png?raw=true"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;


