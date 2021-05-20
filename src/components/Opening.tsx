// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styles, animations, and illustrations
import { openingAnim } from '../styles/animations'

export const Opening: FunctionComponent = () => {

    return (
        <SOpening variants={openingAnim} initial="hidden" animate="show" exit="exit">
            <h1>Himo</h1>
            <h1>IS a creative studio</h1>
        </SOpening>
    );
}

export const SOpening = styled(motion.div) `
    position: fixed;
    top: 0;
    left: 0;
    h1 {
        font-size: 3.6rem
    }
`;





