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
                            <p>Hello</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Submit</button>
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