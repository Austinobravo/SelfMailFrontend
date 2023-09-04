import React, { useEffect, useState} from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Form = () =>{
    const [messages, setMessages] = useState('')
    const [isSending, setIsSending] = useState(false);
    const [isGeneratingAI, setIsGeneratingAI] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const navigate = useNavigate()
    const [generatedDescription, setGeneratedDescription] = useState({description:''});
    // const [emailDetails, setEmailDetails] = useState([])
    const [formData, setFormData] = useState({
    from_mail : '',
    to_mail: '',
    subject: '',
    files: [],
    description: '',
    })
    
    const openai = async () =>{
        setIsGeneratingAI(true);
        setIsButtonDisabled(true);

        // const descriptionToSend = new generatedDescription()
        // descriptionToSend.append('description', generatedDescription.description)
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/openai/`, {
                description: formData.description 
            })
            const generatedText = response.data.generated_text;

            setGeneratedDescription(generatedText);
            setMessages(response.data.message);

            // Simulate typing animation
            let typedDescription = '';
            for (const char of generatedText) {
                typedDescription += char;
                setFormData(prevFormData => ({
                    ...prevFormData,
                    description: typedDescription
                }));
                await new Promise(resolve => setTimeout(resolve, 20)); // Adjust the delay as needed
            }

        } catch (error) {
            setIsGenerating(false);

        }
        finally {
            // Reset loading state to false after the request is complete
            setIsGeneratingAI(false);
            setIsButtonDisabled(false);
        }
        };
    const handleOpenAIButtonClick = () => {
        if (isGenerating) {
            // User clicked "Stop" button
            setIsGenerating(false);
            // Clear the generated description
            // setGeneratedDescription({ description: '' });
        } else {
            // User clicked "AI Generate" button
            setIsGenerating(true);
            openai();
        }
    };
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setIsSending(true);

        const formDataToSend = new FormData();
        formDataToSend.append('from_mail',formData.from_mail)
        formDataToSend.append('to_mail',formData.to_mail)
        formDataToSend.append('subject',formData.subject)
        for (let i = 0; i < formData.files.length; i++){
            formDataToSend.append('file',formData.files[i])
        }
        formDataToSend.append('description',formData.description)

        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/send_email/`, formDataToSend,{
                headers:{
                    'Content-Type':'multipart/form-data',
                }
            })

            const savedEmailDetails = response.data.email_details
            const message = response.data.message

            navigate('/email-details', {state:{emailDetails:savedEmailDetails,message: message},}) 

        }catch(error){
            console.log('Error Fetching details', error)
        }
        finally {
        // Reset loading state to false after the request is complete
        setIsSending(false);
        }
    }
    const handleInputChange =(e) =>{
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const handleFileChange = (e) =>{
        const files = Array.from(e.target.files);
        setFormData((prev) =>({
            ...prev,
            files: prev.files.concat(files),
        }))
    }

    return (
        <React.Fragment>
                            <form class="custom-form ebook-download-form bg-white shadow"  role="form" onSubmit={handleSubmit}>
                                <div class="text-center mb-5">
                                    <h2 class="mb-1">Send Your Email:</h2>
                                </div>

                                <div class="ebook-download-form-body">
                                <div class="input-group mb-4">
                                        <input type="email" name="from_mail" value={formData.from_mail} onChange={handleInputChange} id="ebook-email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="From: " aria-label="ebook-form-email" aria-describedby="basic-addon2" required />

                                        <span class="input-group-text" id="basic-addon2">
                                            <i class="custom-form-icon bi-envelope"></i>
                                        </span>
                                    </div>
                                    <div class="input-group mb-4">
                                        <input type="email" name="to_mail" value={formData.to_mail} onChange={handleInputChange} id="ebook-email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="To" aria-label="ebook-form-email" aria-describedby="basic-addon2" required />

                                        <span class="input-group-text" id="basic-addon2">
                                            <i class="custom-form-icon bi-envelope"></i>
                                        </span>
                                    </div>
                                    <div class="input-group mb-4">
                                        <input type="text" name="subject"value={formData.subject} onChange={handleInputChange} id="ebook-form-name" class="form-control" aria-label="ebook-form-name" aria-describedby="basic-addon1" placeholder="Subject" required/>

                                        <span class="input-group-text" id="basic-addon1">
                                            <i class="custom-form-icon bi-person"></i>
                                        </span>
                                    </div>
                                    <div class="input-group mb-4">
                                        <input type="file" name="file"  onChange={handleFileChange} id="ebook-form-name" style={{border:"0"}} class="form-control" aria-label="ebook-form-name" aria-describedby="basic-addon1" multiple/>
                                    </div> 

                                    <div class="mb-4" style={{ position: "relative" }}>
                                    <textarea
                                        className="form-control"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        rows="10"
                                        style={{ borderRadius: "0" }}
                                        placeholder="Compose Email"
                                        required
                                    ></textarea>
                                                                        <>
                                        { messages ? (
                                          
                                                <h6 style={{fontSize: "16px"}}>{messages}</h6>
                                            
                                        ):(
                                            <span></span> 
                                            
                                            )}
                                        </>
                                    <button
                                        onClick={() => {
                                            handleOpenAIButtonClick(); 
                                            setFormData(prevFormData => ({
                                                ...prevFormData,
                                                description: '' 
                                            }));
                                        }}
                                        style={{ float: 'right', marginTop: '10px', background:'#E76F51', color:"#fff", fontWeight:400,borderRadius: '10px', border:0,fontSize:'16px'}}
                                        disabled={isButtonDisabled || isGeneratingAI}
                                        >

                                        
                                        {isGeneratingAI ? (
                                        <div className="spinner-border spinner-border-sm" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    ) : (
                                        "AI Generate"
                                    )}
                                    </button>
                                </div>


                                <div class="col-lg-8 col-md-10 col-8 mx-auto">
                                    {isSending ? (
                                        <button type="submit" class="form-control" disabled>
                                            <div className="spinner-border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </button>
                                    ) : (   
                                        <button type="submit" class="form-control">
                                            Send
                                        </button>
                                    )}
                                </div>

                                </div>
                            </form>
        </React.Fragment>
    )

}
export default Form