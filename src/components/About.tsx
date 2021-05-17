// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styles, animations, and illustrations
import { ReactComponent as WhoWeAre} from '../svgs/who-we-are.svg';
import { ReactComponent as WhatWeOffer} from '../svgs/what-we-offer.svg';
import { ReactComponent as WhyChooseUs} from '../svgs/why-choose-us.svg';

export const About: FunctionComponent = () => {

    return (
        <SAbout>
            <SInfo>
                <SInfoText>
                    <div className="info-text-title">
                        <h1>Who we are</h1>
                        <SLine></SLine>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ducimus alias labore consectetur voluptatem est, voluptatibus itaque iste, laboriosam quam enim laudantium culpa debitis quasi laborum mollitia sequi! Atque a quos debitis explicabo, cupiditate libero alias.</p>
                </SInfoText>
                <SInfoImg>
                    <WhoWeAre />
                </SInfoImg>
            </SInfo>
            <SInfo className="middle-info">
                <SInfoImg>
                    <WhyChooseUs />
                </SInfoImg>
                <SInfoText>
                    <div className="info-text-title">
                        <h1>Why choose us</h1>
                        <SLine></SLine>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ducimus alias labore consectetur voluptatem est, voluptatibus itaque iste, laboriosam quam enim laudantium culpa debitis quasi laborum mollitia sequi! Atque a quos debitis explicabo, cupiditate libero alias.</p>
                </SInfoText>
            </SInfo>
            <SInfo>
                <SInfoText>
                    <div className="info-text-title">
                        <h1>What we offer</h1>
                        <SLine></SLine>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ducimus alias labore consectetur voluptatem est, voluptatibus itaque iste, laboriosam quam enim laudantium culpa debitis quasi laborum mollitia sequi! Atque a quos debitis explicabo, cupiditate libero alias.</p>
                </SInfoText>
                <SInfoImg>
                    <WhatWeOffer/>                
                </SInfoImg>
            </SInfo>
        </SAbout>
    );
}

const SAbout = styled(motion.div)`
    padding: 10rem 10rem;
    display: flex;
    flex-direction: column;
    min-height: 90vh;
    align-items: space-around;
    justify-content: space-between;
    
`;

const SInfo = styled(motion.div)`
    display: flex;
    padding: 5rem 0rem;
    justify-content: space-between;
    align-items: center;
`;

const SInfoText = styled(motion.div)`
    position: relative;

    .info-text-title {
        h1 {
            font-family: 'Playfair Display', serif;
            font-size: 3.6rem;
            color: #EAE8DC;
            letter-spacing: 1px;
            font-weight: bold;
        }

    }
    
    p {
        font-family: 'Montserrat', sans-serif;
        font-size: 2.4rem;
        color: #EAE8DC;
        padding-top: 2rem;
    }

`;

const SInfoImg = styled(motion.div)`
    margin: 0rem 10rem;
    width: 100%;
    svg {
        object-fit: cover;

    }
`;

const SLine = styled(motion.div)`
    height: 0.5rem;
    background: #43A498;
    width: 35%;
    position: absolute;
    top: 5rem;
`;

