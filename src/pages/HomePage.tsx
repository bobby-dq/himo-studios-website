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
import { sliderAnim, sliderContainerAnim, homeContainerAnim } from '../styles/animations'

export const HomePage: FunctionComponent = () => {
    return (
        <AnimatePresence exitBeforeEnter>
            <SHomePage variants={homeContainerAnim} initial="hidden" animate="show">
                <Opening />
                <motion.div variants={sliderContainerAnim}>
                    <Frame1 variants={sliderAnim} />
                    <Frame2 variants={sliderAnim} />
                    <Frame3 variants={sliderAnim} />
                    <Frame4 variants={sliderAnim} />
                </motion.div>

                <Hero />
                <About />
                <Organizations />
            </SHomePage>
        </AnimatePresence>

        
    );
}


const SHomePage = styled(motion.div)`
    color: white;
    padding: 1rem 10rem;

    @media (max-width: 1300px) {
        padding: 1rem 2rem;
    }
`;



const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 0px;
    width: 100%;
    height: 100vh;
    background: #43A498;
    z-index: 30;
`;

const Frame2 = styled(Frame1)`
    background: #4785ae
`;

const Frame3 = styled(Frame1)`
    background: #4d43a4
`;

const Frame4 = styled(Frame1)`
    background: #8c43a4;
`;

const FrameCover = styled(Frame1)`
    background: white;
`;