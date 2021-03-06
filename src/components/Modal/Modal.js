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
                            <h5 className="modal-title">Get to know me</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img className="profile-pic" alt="Profile pic" src="https://github.com/teresam3/teresa-maldonado/blob/main/public/images/profile-pic.jpeg?raw=true"/>
                            <p><br/>Hello! I’m a software developer and UI/UX designer with a passion for creating customer experiences that are innovative, exciting and personal. I believe in the importance of knowing your audience and who will consequently use your application and using that knowledge when writing code </p>
                            <p><br/>I like to describe myself as a community builder, both in creating products that connect people online, and also in communicating effectively with others in the work environment.</p> 
                            <p><br/>Most notably, I work best when I create. Working in software development is a joy to me, and I believe that my passion and drive for accomplishing tasks creates an outcome that always exceeds expectations. Proficient in HTML/CSS, Javascript, React, Mongo, MYSQL, Heroku, Git workflow, Jquery, and Node. Take a look at my <a href="https://docs.google.com/document/d/e/2PACX-1vR9vjjXxZbfxGFXaYnziHBsuR1TrFGwaD2U6YP4c9sRupmu8gcnNnGrXGRa5j09uNt40qNhXagMxp7U/pub">resume.</a> </p>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Ha</button>
                        </div> */}
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