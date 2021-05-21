// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Organizations } from '../components/Organizations';
import { Opening } from '../components/Opening';

// Styles and animations
import { pageAnimation } from '../styles/animations'

export const HomePage: FunctionComponent = () => {
    return (
        <SHomePage variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <Hero />
            <About />
            <Organizations />
        </SHomePage>

        
    );
}


const SHomePage = styled(motion.div)`
    color: white;
    padding: 1rem 10rem;

    @media (max-width: 1300px) {
        padding: 1rem 2rem;
    }
`;



