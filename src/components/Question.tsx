// Packages
import { FunctionComponent, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { IFaq } from '../data/faqData';

// Styles, animations, illustrations
import downArrow from '../svgs/faq-down-arrow.svg'

interface IQuestion {
    question: IFaq
}

export const Question: FunctionComponent<IQuestion> = (props) => {
    const [toggle, setToggle] = useState(false);

    return (
        <SQuestion>
            <div className="title-wrapper">
                <STitle onClick={() => setToggle(!toggle)}>
                    <img src={downArrow} alt="see-answer" />
                    <h1>{props.question.question}</h1>
                </STitle>
                <SLine></SLine>
            </div>
            {toggle? <p>{props.question.answer}</p> : <p></p>}
            
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
    }
    
`;

const SLine = styled(motion.div)`
    height: 0.5rem;
    background: #43A498;
    width: 50%;
    position: absolute;
    top: 5rem;
`;

const STitle = styled(motion.div)`
    display: flex;
    align-items: center;
    cursor: pointer;

    h1 {
        font-family: 'Playfair Display', serif;
        font-size: 3.6rem;
        margin-left: 1rem;
    }

    img {
        width: 3rem;
    }
`;