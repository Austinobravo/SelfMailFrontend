import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import image from '../static/images/portrait-mature-smiling-authoress-sitting-desk.jpg'
import bgImage from '../static/images/circle-scatter-haikei.png';
import Form from "./Form";
import axios from 'axios'


const Home = () =>{
    const [isGeneratingContent, setIsGeneratingContent] = useState(false);
    const [messages, setMessages] = useState("")

    
    useEffect(()=>{
        const FetchData = async () =>{
            setIsGeneratingContent(true)
            try {
                let res = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/`)
                setMessages(res.data.messages)
            }catch(error){
                setIsGeneratingContent(false)
            }finally{
                setIsGeneratingContent(false)

            }
        }
        FetchData()
            
    }, [])


    return (
        <React.Fragment>
            <section className="author-section section-padding" style={{backgroundImage: `url(${bgImage})`}} id="section_3">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <img src={image} className="author-image img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                            <h6>Free Email </h6>

                            <h2 className="mb-4">Send your Email Here.</h2>

                            <p>This is a self mailing serveice used for sending customized email to family and business associates and verifies the use of external mailing  services..</p>

                            {/* <p>Lorem ipsum dolor sit amet, consive adipisicing elit, sed do eiusmod. tempor incididunt ut labore.</p> */}
                        </div>

                    </div>
                </div>
            </section>


            <section class="py-lg-5"></section>



            {/* Email */}
            <section>
                <div class="container">
                    <div class="row">

                        <div class="col-lg-8 col-12 mx-auto">
                            <Form/>
                        </div>
                    </div>
                </div>

            </section>

            <section class="py-lg-5"></section>
            
            {/* { isGeneratingContent ? (
                <div className="loading-overlay">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            ):(
                <section>
                {messages.map((post) =>{
                 return (
                 <div key={post.id}>
                     <div>{post.from_mail}</div>
                     <div>{post.to_mail}</div>
                     <div>{post.file}</div>
                     <div>{post.description}</div>
                     <div>{post.date_created}</div>
                     <div>{post.formatted_date}</div>
                     <Link to={`/verify/${post.id}`}> Preview</Link>
     
                 </div>

                )
                })}
                </section>

            )
        
        } */}
        </React.Fragment>
    )

};
export default Home
