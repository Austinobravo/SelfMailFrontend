import React from "react";
// import pic from '../static/images/avatar/portrait-young-redhead-bearded-male.jpg'
import {Link} from 'react-router-dom'

const Header = () =>{

    return (
        <React.Fragment>
                <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container">
                    <Link to="/" class="navbar-brand" >
                        <i class="navbar-brand-icon bi-book me-2"></i>
                        <span style={{color:"white"}}>ebook</span>
                    </Link>

                    <div class="d-lg-none ms-auto me-3">
                        <Link to="" class="btn custom-btn custom-border-btn btn-naira btn-inverted">
                            <i class="btn-icon  btn bi-cloud-download"></i>
                            <span>Download</span>
                        </Link>
                    </div>
    
                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
    
                    <div class="collapse navbar-collapse " id="navbarNav">
                        <ul class="navbar-nav ms-lg-auto me-lg-4">
                            <li class="nav-item">
                                <Link class="nav-link click-scroll" to="/">Home</Link>
                            </li>
    
                            <li class="nav-item">
                                <Link class="nav-link click-scroll" to="/about">About Us</Link>
                            </li>

                        </ul>

                        <div class="d-none d-lg-block">
                            <a href="#" class="btn custom-btn custom-border-btn btn-naira btn-inverted">
                                <i class="btn-icon bi-cloud-download"></i>
                                <span>Download</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            
        </React.Fragment>
    )

}
export default Header