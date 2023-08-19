import React, {useState}from "react";
import axios from 'axios'

const Footer = () =>{
    const [newsletter, setNewsLetter] = useState({ebook_email: ''})
    const [isLoading, setLoading] = useState(false)
    const [message, setMessages] = useState('')
    


    const newLetter = async (e) =>{
        e.preventDefault()
        setLoading(true)
        const newsLetterTosend = new FormData()
        newsLetterTosend.append('newsletter', newsletter.ebook_email)
        try{
            let response = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/newsletter/`, newsLetterTosend )
            setMessages(response.data.message)
            console.log(response.data.message)
            setNewsLetter({ebook_email: ''})
            const msg = response.data.message

        }catch(err){
            setMessages('Error fetching details:',err)
            setLoading(false)


        }finally{
        setLoading(false)
        }

    }
    const handleInputChange =(e) =>{
        const {name, value} = e.target;
        setNewsLetter((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <>

        <section class="contact-section mt-5 section-padding" id="section_5">
                <div class="container">
                    <div class="row">  

                        <div class="col-lg-5 col-12 mx-auto">
                            <form class="custom-form ebook-download-form bg-white shadow" onSubmit={newLetter} role="form">
                                <div class="text-center mb-5">{message}
                                    <h2 class="mb-1">Subscribe to our Newsletter</h2>{message}
                                </div>

                                <div class="ebook-download-form-body">
                                    <div class="input-group mb-4">
                                        <input type="email"  name="ebook_email" value={newsletter.ebook_email} onChange={handleInputChange} id="ebook-email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Email address.." aria-label="ebook-form-email" aria-describedby="basic-addon2" required/>

                                        <span class="input-group-text" id="basic-addon2">
                                            <i class="custom-form-icon bi-envelope"></i>
                                        </span>
                                    </div>
                                {isLoading ? (
                                    <button type="submit" class="form-control" disabled>
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </button>
                                ):(

                                    <div class="col-lg-8 col-md-10 col-8 mx-auto">
                                        <button type="submit" class="form-control">Subscribe</button>
                                    </div>
                                )}
                                </div>
                            </form>
                        </div>

                        <div class="col-lg-6 col-12">
                            <h6 class="mt-5">Say hi and talk to us</h6>

                            <h2 class="mb-4">Contact</h2>

                            <p class="mb-3">
                                <i class="bi-geo-alt me-2"></i>
                                Yola, Adamawa
                            </p>

                            <p class="mb-2">
                                <a href="tel: 010-020-0340" class="contact-link">
                                    080 - SmeGear
                                </a>
                            </p>

                            <p>
                                <a href="mailto:info@company.com" class="contact-link">
                                    smegearconsults@gmail.com
                                </a>
                            </p>

                            <h6 class="site-footer-title mt-5 mb-3">Social</h6>

                            <ul class="social-icon mb-4">
                                <li class="social-icon-item">
                                    <a href="#" class="social-icon-link bi-instagram"></a>
                                </li>

                                <li class="social-icon-item">
                                    <a href="#" class="social-icon-link bi-twitter"></a>
                                </li>
                                
                                <li class="social-icon-item">
                                    <a href="#" class="social-icon-link bi-facebook"></a>
                                </li>

                                <li class="social-icon-item">
                                    <a href="#" class="social-icon-link bi-whatsapp"></a>
                                </li>
                            </ul>

                            <p class="copyright-text">Copyright © {new Date().getFullYear()} SmeGear</p>
                            {/* <br/><br/><a rel="nofollow" href="https://templatemo.com" target="_blank">designed by templatemo</a> */}
                        </div>

                    </div>
                </div>
            </section>

        </>
    )

}
export default Footer