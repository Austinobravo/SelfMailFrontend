import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import image from "../static/images/tablet-screen-contents.jpg"
import {Link} from 'react-router-dom'

const Detail = () =>{
    const [messages, setMessages] = useState(null)
    const {id} = useParams();
    console.log('id',id)
    useEffect(()=>{
        const FetchData = async () =>{
            try{
                let response = await axios.get(`/api/${id}`)
                    setMessages(response.data)

            }catch(error){
                console.log("Error details page:", error)
            }
        }
        FetchData()
    }, [id])
    return (
    <React.Fragment>
            <section className="py-lg-5"></section>
            <section>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-12 mt-5 text-center">
                            <h6>Thank You.</h6>

                            <h2 className="mb-5">Your mail is on it's way.</h2>
                        </div>

                        <div className="col-lg-7 mx-auto col-12">
                            <nav id="navbar-example3" className="h-100 flex-column align-items-stretch">
                                <nav className="nav nav-pills flex-column">
                                    <p className="nav-link smoothscroll" to="/">Your Email have been sent.</p>
                            {messages ? (
                                <>

                                    <p className="nav-link smoothscroll">From: <strong>{messages.from_mail}</strong></p>

                                    <p className="nav-link smoothscroll">To: <strong>{messages.to_mail}</strong></p>

                                    <p className="nav-link smoothscroll">Subject: <strong>{messages.subject}</strong></p>

                                    <p className="nav-link smoothscroll">Date: <strong>Aug 20 2023, 15:30</strong></p>
                                    
                                    <p className="nav-link smoothscroll">File: {messages.file} </p>

                                    <blockquote className="blockquote">{messages.description}</blockquote>

                                    <Link to="/"><div class="col-lg-8 col-md-10 col-8 mx-auto custom-form ">
                                       <button type="submit"  class="form-control">Send Another..</button>
                                    </div></Link>
                                </>
                                    ):
                                    <div>Messages loading...</div>
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
export default Detail