// Pacakges
import { FunctionComponent } from 'react';
import styled from 'styled-components';

// Styles and illustrations
import phoneIcon from '../img/iconmonstr-phone-9-240.png';
import emailIcon from '../img/iconmonstr-email-11-240.png';

export const Footer: FunctionComponent = () => {
    
    return  (
        <SFooter>
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
                    <a href = "mailto: josh.quilacio@gmail.com">josh.quilacio@gmail.com</a>
                </div>
                
            </div>
            <p className="copyright">Copyright © 2021 - Himo Studio. All Rights Reserved</p>
        </SFooter>
    );
}

const SFooter = styled.div`
    min-height: 50rem;
    background-color: #1b1b1b;
    color: #EAE8DC;
    font-family: 'Montserrat', sans-serif;
    padding: 2rem 10rem;
    font-size: 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 1300px) {
        padding: 2rem 2rem;
    }

    .contact-wrapper {
        display: flex;
        justify-content:center;
        align-items: center;
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

    .copyright{
        margin-top: 1rem;
        text-align: center;
    }
    
`;

