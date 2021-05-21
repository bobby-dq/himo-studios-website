// Pacakges
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styles and illustrations
import { progressTextAnimation, inProgressWrapper } from "../styles/animations"

export const InProgress: FunctionComponent = () => {
    
    return  (
        <SInProgress variants={inProgressWrapper} initial="hidden" animate="show">
            <div className="text-wrapper">
                <motion.h1 variants={progressTextAnimation}>PROJECT</motion.h1>
            </div>
            <div className="text-wrapper">
                <motion.h1 variants={progressTextAnimation}>IN</motion.h1>
            </div>
            <div className="text-wrapper">
                <motion.h1 variants={progressTextAnimation}>PROGRESS</motion.h1>
            </div>
        </SInProgress>
    );
}

const SInProgress = styled(motion.div)`
    min-height: 70rem;
    background-color: #1b1b1b;
    color: #EAE8DC;
    font-family: 'Montserrat', sans-serif;
    font-size: 3.6rem;
    margin-top: 10rem;
    .text-wrapper {
        text-align: center;
        overflow: hidden;
    }
`;

