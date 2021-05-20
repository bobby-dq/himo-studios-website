// Pacakages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion, AnimateSharedLayout } from 'framer-motion';

// Components
import { Question } from '../components/Question';

// Data
import { faqData } from '../data/faqData';

// Styles and animations
import { pageAnimation } from '../styles/animations';

export const FaqPage: FunctionComponent = () => {
    const data = faqData();

    return (
        <SFaqPage variants={pageAnimation} initial="hidden" animate="show">
            <SFaqHeader>
                <h1>FAQ</h1>
                <SLine transition={{duration: 0.75}} initial={{width: '0%'}} animate={{ width: '25%'}}></SLine>
            </SFaqHeader>
            <AnimateSharedLayout>
                <SQuestionsWrapper>
                    {data.map(q => <Question key={q.question} question={q}></Question>)}
                </SQuestionsWrapper>
            </AnimateSharedLayout>
            
        </SFaqPage>
    );
}

const SFaqPage = styled(motion.div)`
    display: block;
    min-height: 100vh;
    padding: 5rem 10rem;
    overflow: hidden;

    @media (max-width: 1300px) {
        padding: 5rem 2rem;
    }
`;

const SFaqHeader = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0rem 0rem 10rem 0rem;

    h1 {
        font-family: 'Montserrat', sans-serif;
        color: #EAE8DC;
        font-size: 3.6rem;
        letter-spacing: 10px;
        font-weight: bolder;
    }
`;

const SQuestionsWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;


const SLine = styled(motion.div)`
    height: 0.5rem;
    background: #43A498;
    width: 25%;
    position: absolute;
    top: 5rem;
`;