import React, { useEffect, useState } from "react";
import {Link, useLocation} from 'react-router-dom'

const EmailDetail = () =>{
    const location = useLocation()
    const emailDetails = location.state && location.state.emailDetails 
    const message = location.state &&  location.state.message
    return (   
    <React.Fragment>
            <section className="py-lg-5"></section>
            <section>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-12 mt-5 text-center">
                            <h6>Thank You.</h6>

                            <h2 className="mb-5">We Appreciate you.</h2>
                        </div>

                        <div className="col-lg-7 mx-auto col-12">
                            <nav id="navbar-example3" className="h-100 flex-column align-items-stretch">
                                <nav className="nav nav-pills flex-column">
                            {emailDetails ? (
                                <>
                                    <p className="nav-link smoothscroll" to="/">{message}.</p>

                                    <p className="nav-link smoothscroll">Date: <strong>{new Date(emailDetails.date_created).toDateString()}</strong></p>
                                    
                                    <p className="nav-link smoothscroll">From: <strong>{emailDetails.from_mail}</strong></p>

                                    <p className="nav-link smoothscroll">To: <strong>{emailDetails.to_mail}</strong></p>

                                    <p className="nav-link smoothscroll">Subject: <strong>{emailDetails.subject}</strong></p>

                                    <p className="nav-link smoothscroll">File: {emailDetails.file} </p>

                                    <blockquote className="blockquote">{emailDetails.description}</blockquote>

                                    <Link to="/"><div class="col-lg-8 col-md-10 col-8 mx-auto custom-form ">
                                       <button type="submit"  class="form-control">Send Another..</button>
                                    </div></Link>
                                </>
                                    ):
                                    <>
                                    <p className="nav-link smoothscroll" to="/">You didn't send any mail..</p>
                                    <Link to="/"><div class="col-lg-8 col-md-10 col-8 mx-auto custom-form ">
                                    <button type="submit"  class="form-control">Send One Now..</button>
                                 </div></Link>
                                    </>

                                    }
                                </nav>
                            </nav>
                        </div>


                    </div>
                </div>
            </section>


    </React.Fragment>
    )

}
export default EmailDetail