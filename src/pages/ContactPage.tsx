// Packages
import { FunctionComponent, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export const ContactPage: FunctionComponent = () => {
    function sendEmail(e: SyntheticEvent) {
        e.preventDefault();

        emailjs.sendForm('service_n377knx', 'template_yhulfs8', (e.target as HTMLFormElement), 'user_dNlgxkSRMslJAvAJKneoV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            (e.target as HTMLFormElement).reset();
    }
    

    return (
        <SContactPage>
            <STitle>
                <h1>WE'D LOVE TO HEAR FROM YOU</h1>
                <SLine></SLine>
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
                        <input type="submit" value="Send your message!" required/>
                    </div>
                </form>
            </SFormWrapper>
        </SContactPage>
    );
}


const SContactPage = styled(motion.div)`
    min-height: 90vh;
    padding: 5rem 10rem;
`;
const STitle = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0rem 0rem 5rem 0rem;

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