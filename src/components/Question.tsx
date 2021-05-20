// Packages
import { FunctionComponent, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { IFaq } from '../data/faqData';

// Styles, animations, illustrations
import downArrow from '../svgs/faq-down-arrow.svg'

// Styles, animations, illustrations
import { arrowQAnimation } from '../styles/animations';

interface IQuestion {
    question: IFaq
}

export const Question: FunctionComponent<IQuestion> = (props) => {
    const [toggle, setToggle] = useState(false);

    return (
        <SQuestion layout>
            <div className="title-wrapper">
                <STitle onClick={() => setToggle(!toggle)}>
                    <motion.img layout variants={arrowQAnimation}  src={downArrow} alt="see-answer" />
                    <motion.h1 layout>{props.question.question}</motion.h1>
                </STitle>
            </div>
                <motion.p variants={arrowQAnimation} style={{display: `${toggle? 'block': 'none'}`}}>{props.question.answer}</motion.p>
            
            
            
        </SQuestion>
        
    );
}

const SQuestion = styled(motion.div)`
    color: #EAE8DC;
    padding-bottom: 5rem;

    .title-wrapper {
        position: relative;
        margin-bottom: 2rem;
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-size: 2.4rem;
        transition: all 0.5s ease;
    }
    
`;

const STitle = styled(motion.div)`
    display: flex;
    align-items: center;
    cursor: pointer;
    overflow: hidden;

    h1 {
        font-family: 'Playfair Display', serif;
        font-size: 3.6rem;
        margin-left: 1rem;
    }

    img {
        width: 3rem;
    }
`;