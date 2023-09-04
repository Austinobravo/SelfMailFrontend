import React from 'react';
import logo from '../static/images/LOGO.png'
import image from '../static/images/tablet-screen-contents.jpg'

const About = () =>{
    return (
        <>

        
        <section class="book-section section-padding" id="section_2">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-12">
                            <img src={`${logo}`} class="img-fluid" alt=""/>
                        </div>

                        <div class="col-lg-6 col-12">
                            <div class="book-section-info">
                                <h6>Excellence with Speed.</h6>


                                <h2 class="mb-4">About US</h2>

                                <p>Smegear is a branding agency, that has passion for building and designing. Over the years , They have gained themselves admiration and trust from client who have been of patronage also refering others to them.</p>

                                <p>Their love for Software have seen them slowly metamorphose to a brand in the tech world. With recent and current web apps online , We stay committed to conquering the future. <br/><a rel="nofollow" href="https://mysmegear.com" target="_blank">Official Smegear</a>.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section>
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12 text-center">
                            <h6>What's inside?</h6>

                            <h2 class="mb-5">Preview at glance</h2>
                        </div>

                        <div class="col-lg-4 col-12">
                            <nav id="navbar-example3" class="h-100 flex-column align-items-stretch">
                                <nav class="nav nav-pills flex-column">
                                    <a class="nav-link smoothscroll" href="#item-1">CAC/TIN/SMEDAN Registration</a>

                                    <a class="nav-link smoothscroll" href="#item-2">Chapter 1: <strong>Graphics Design</strong></a>

                                    <a class="nav-link smoothscroll" href="#item-3">Chapter 2: <strong>Branding</strong></a>

                                    <a class="nav-link smoothscroll" href="#item-4">Chapter 3: <strong>Software Development</strong></a>

                                    <a class="nav-link smoothscroll" href="#item-5">Chapter 4: <strong>Social Media Management </strong></a>
                                </nav>
                            </nav>
                        </div>

                        <div class="col-lg-8 col-12">
                            <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
                                <div class="scrollspy-example-item" id="item-1">
                                    <h5>CAC/TIN/SMEDAN Registration</h5>

                                    <p>One of our key product is ensuring the security and safety of your busines by partnering with the coporate affair commission to register and properly inducted new business owners getting their business registered and ensuring their business name/company is properly registered.</p>

                                    <blockquote class="blockquote">Do you know owning a business and not registering is a crime?</blockquote>

                                    <p>Register with your number one consultants.</p>
                                </div>

                                <div class="scrollspy-example-item" id="item-2">
                                    <h5>Graphics Design</h5>

                                    <p>With our team of capable hands, Graphics design is also a key product in our institution.</p>

                                    <p>We deliver you on new flyers ,logo and anything a graphic designer can design.</p>

                                    <p>Why not check out our service and be convinced.</p>

                                    <div class="row">
                                        <div class="col-lg-6 col-12 mb-3">
                                            <img src="images/portrait-mature-smiling-authoress-sitting-desk.jpg" class="scrollspy-example-item-image img-fluid" alt=""/>
                                        </div>

                                        <div class="col-lg-6 col-12 mb-3">
                                            <img src="images/businessman-sitting-by-table-cafe.jpg" class="scrollspy-example-item-image img-fluid" alt=""/>
                                        </div>
                                    </div>

                                    <p>If you need some specific Graphics templates, Drop us a <a href='mailto:smegearconsults@gmail.com' >mail</a>.</p>
                                </div>

                                <div class="scrollspy-example-item" id="item-3">
                                    <h5>Branding</h5>

                                    <p>Welcome to your number one branding agency.</p>

                                    <p>Branding is a key product that also sell ,beautiful and long lasting design is what you get when you work with us.</p>

                                    <div class="row align-items-center">
                                        <div class="col-lg-6 col-12">
                                            <img src={`${image}`} class="img-fluid" alt=""/>
                                        </div>

                                        <div class="col-lg-6 col-12">
                                            <p>Check us out today</p>

                                            <p><strong><a rel="nofollow" href="https://mysmegear.com" target="_blank">Official Smegear</a>.</strong></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="scrollspy-example-item" id="item-4">
                                    <h5>Software Development</h5>

                                    <p>Software Development has sta gainingit' feet in smeg nd  we ar keen to sustaining it for longetivity .</p>

                                    <p>This beautiful masterpieceyou're currently browsing through was builtby our software team.</p>

                                    <p>Give us a try today.</p>

                                    <img src="images/portrait-mature-smiling-authoress-sitting-desk.jpg" class="scrollspy-example-item-image img-fluid mb-3" alt=""/>

                                    <p>You may want to contact us for more information about <a rel="nofollow" href="https://mysmegear.com" target="_blank">this</a>.</p>
                                </div>

                                <div class="scrollspy-example-item" id="item-5">
                                    <h5>Social Media Management </h5>

                                    <p>Our social media team are a team of capable hands that ensures your pages are always been updated and ascertain the right amount of audicience you seek as a business.</p>

                                    <blockquote class="blockquote">Do you know we can give you a strategy that works for ads growth?</blockquote>

                                    <p>You may browse <a rel="nofollow" href="https://mysmegear.com" target="_blank">Official Smegear</a>. website for more. Thank you for visiting our website.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        
        </>
    )
}
export default About 
