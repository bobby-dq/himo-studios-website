// Packages
import { FunctionComponent, SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

// Styles and animations
import { pageAnimation } from '../styles/animations';

export const ContactPage: FunctionComponent = () => {
    const [sent, setSent] = useState(false);

    function sendEmail(e: SyntheticEvent) {
        e.preventDefault();

        emailjs.sendForm('service_n377knx', 'template_yhulfs8', (e.target as HTMLFormElement), 'user_dNlgxkSRMslJAvAJKneoV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            (e.target as HTMLFormElement).reset();
            setSent(true);
    }
    

    return (
        <SContactPage variants={pageAnimation} initial="hidden" animate="show">
            <STitle>
                <h1>WE'D LOVE TO HEAR FROM YOU</h1>
                <SLine transition={{duration: 0.75}} initial={{width: '0%'}} animate={{ width: '75%'}}></SLine>
            </STitle>
            <SFormWrapper>
                <form onSubmit={(e) => sendEmail(e)}>
                    <div className="row first-row">
                        <input type="text" name="name" required placeholder="your name"></input>
                        <input type="text" name="company_name"  placeholder="your company/brand name"></input>
                    </div>
                    <div className="row second-row">
                        <input type="email" name="email" required placeholder="email"></input>
                        <input type="tel" name="telephone" required placeholder="phone"></input>
                    </div>
                    <div className="row third-row">
                        <input type="text" name="subject" required placeholder="subject"></input>
                    </div>
                    <div className="row fourth-row">
                        <textarea name="message" rows={20} placeholder="message (company description, FAQ, pricing)" required></textarea> 
                    </div>
                    <div className="row submit-row">
                        <input type="submit" value={`${sent? "We'll get back to you as soon as possible!" : "Send your message"}`} required/>
                    </div>
                </form>
                <div className="send-another">
                    {sent? <p onClick={() => setSent(false)}>Click here to send another message!</p>:'' }
                </div>
            </SFormWrapper>
            
        </SContactPage>
    );
}


const SContactPage = styled(motion.div)`
    min-height: 90vh;
    padding: 5rem 10rem;

    @media (max-width: 1300px) {
        padding: 5rem 2rem;
    }
`;
const STitle = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0rem 0rem 5rem 0rem;
    text-align: center;

    h1 {
        font-family: 'Montserrat', sans-serif;
        color: #1b1b1b;
        font-size: 3.6rem;
        letter-spacing: 10px;
        font-weight: bolder;
    }

    
`;

const SLine = styled(motion.div)`
    height: 0.5rem;
    background: #43A498;
    width: 75%;
    position: absolute;
    top: 5rem;

    @media(max-width: 781px) {
        top: 10rem;
    }
    @media(max-width: 421px) {
        top: 15rem;
    }
`;

const SFormWrapper = styled(motion.div)`
    
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .row {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        width: 100%;

        @media(max-width: 450px) {
            flex-direction: column;
            padding: 0rem 1rem;
        }
    }

    input, textarea{
        width: 100%;
        margin: 0.5rem;
        font-size: 1.6rem;
        padding: 1rem;
        border: 0.35rem solid #1b1b1b;
        font-family: 'Montserrat', sans-serif;
        &:focus {
            border-radius: 0;
            box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.25)
        }
    }
    
    .send-another p {
        font-family: 'Montserrat', sans-serif;
        margin-top: 2rem;
        color: #1b1b1b;
        font-size: 1.6rem;
        cursor: pointer;
        text-align: center;
        text-decoration: underline;
    }

    textarea {
        resize: none;
    }

    .submit-row input {
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        background: #73FFEE;
        box-shadow: 2px 2px 25px 1px #43A498, inset 1px 1px 10px 0.5px rgba(0, 0, 0, 0.5);
        font-size: 2.4rem;
        cursor: pointer;
    }
    
`;