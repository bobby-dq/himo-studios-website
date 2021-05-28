// Pacakges
import { FunctionComponent } from 'react';
import styled from 'styled-components';

// Styles and illustrations
import phoneIcon from '../img/iconmonstr-phone-9-240.png';
import emailIcon from '../img/iconmonstr-email-11-240.png';
import { Linkedin, Instagram, Facebook } from "@styled-icons/fa-brands";

export const Footer: FunctionComponent = () => {
    
    return  (
        <SFooter>
            <h1 id="logo-text">HIMO STUDIOS_</h1>
            <div className="contact-wrapper">
                <div className="icon-wrapper">
                    <img src={phoneIcon} alt="phone" />
                </div>
                <div className="text-wrapper">
                    <a href="tel:780-862-7430">+1 780 862 7430</a>
                </div>
            </div>
            <div className="contact-wrapper">
                <div className="icon-wrapper">
                    <img src={emailIcon} alt="email" />
                </div>
                <div className="text-wrapper">
                    <a href = "mailto: himowebstudio@gmail.com">himowebstudio@gmail.com</a>
                </div>
            </div>
            <div className="socials-wrapper">
                <div className="social">
                    <a href="https://www.instagram.com/himostudios/" target="_blank" rel="noreferrer">
                        <Instagram size="3.6rem" color="#EAE8DC"/>
                    </a>
                </div>
                <div className="social">
                    <a href="https://www.facebook.com/himostudios" target="_blank" rel="noreferrer">
                        <Facebook size="3.6rem" color="#EAE8DC"/>
                    </a>
                </div>
                <div className="social">
                    <a href="https://www.linkedin.com/in/himo-studios-88772a213/" target="_blank" rel="noreferrer">
                        <Linkedin size="3.6rem" color="#EAE8DC"/>
                    </a>
                </div>
            </div>
            <p className="copyright">Copyright © 2021 - Himo Studios. All Rights Reserved</p>
        </SFooter>
    );
}

const SFooter = styled.div`
    min-height: 50rem;
    background-color: #1b1b1b;
    color: #EAE8DC;
    font-family: 'Montserrat', sans-serif;
    padding: 5rem 10rem;
    font-size: 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media (max-width: 1300px) {
        padding: 2rem 2rem;
    }

    .contact-wrapper {
        display: flex;
        justify-content:center;
        align-items: center;
        margin-bottom: 3rem
    }

    .icon-wrapper {
        width: 3.6rem;
        img {
            width: 100%;
            color: #EAE8DC; 
        }
        
    }

    .text-wrapper {
        font-size: 2.4rem;
        margin-left: 2rem;
        a {
            color: #EAE8DC;
            text-decoration : underline ;
        }
    }

    .socials-wrapper {
        display: flex;
        justify-content: space-between;
        margin-bottom: 3rem;
        .social {
            padding-right: 5rem;
        }
    }

    .copyright{
        margin-top: 1rem;
    }

    #logo-text {
        font-family: 'Montserrat', sans-serif;
        font-size: 3.6rem;
        font-weight: bolder;
        letter-spacing: 2.8px;
        color: #D6AB78;
        padding-top: 1rem;
        text-shadow: inset 1px 1px #1b1b1b;
        margin-bottom: 3rem;
    }
    
`;

