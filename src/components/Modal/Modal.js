import React from "react";
import "./index.css"

//the functions of modals plus what is inside
function Modal() {
    return (
        <div className="whole">
             <div className="modal fade" id="aboutModal" tabindex="-1" aria-labelledby="aboutModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">A little bit about myself</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img className="profile-pic" alt="Profile pic" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/profile-pic.jpeg?raw=true"/>
                            <p><br/> Hello, My name is Teresa Maldonado I am a Full-Stack Developer and UX/UI Designer with experience in large and small retail spaces and an expert in customer experience. This has allowed me to understand the customer and their needs when interacting with a brand or company and how to apply these needs to an online shop or website. </p>
                            <p> I am fueled by my passion to create experiences through websites and applications that are dynamic, intuitive and experiential. I would consider myself a ‘forever student,’ eager to both build on my academic foundations in political science and web development and stay updated with the latest development strategies through continued coursework and professional development. This eagerness to learn has led me to the Full-Stack Flex Bootcamp at UCLA and have since continued polished what I have since learned and improve both development and design skills. </p> 
                            <p>Now, I am currently looking for a full-time role in web development or web design and to become part of a team that looks to create and collaborate. Take a look at my <a href="https://docs.google.com/document/d/e/2PACX-1vR9vjjXxZbfxGFXaYnziHBsuR1TrFGwaD2U6YP4c9sRupmu8gcnNnGrXGRa5j09uNt40qNhXagMxp7U/pub">resume.</a> </p>
                        </div>
                    </div>
                </div>
            </div>
            
{/* <!-- Contact Modal --> */}
            <div className="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">So you want to chat?</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <div className="form-group">
                                        <label for="inputName">Name</label>
                                        <input type="name" className="form-control" id="inputName"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputName">Company</label>
                                        <input type="name" className="form-control" id="inputName"/>
                                    </div>
                                    <div>
                                        <label for="inputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp"/>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputarea">Let's connect!</label>
                                        <textarea className="form-control" id="inputarea" rows="3"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;