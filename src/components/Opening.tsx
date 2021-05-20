// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion,AnimatePresence } from 'framer-motion';

// Styles, animations, and illustrations
import { openingContainerAnim, sliderAnim, sliderContainerAnim, introTextAnimation, introTextContainerAnimation } from '../styles/animations';

export const Opening: FunctionComponent = () => {

    return (
        <SOpening variants={openingContainerAnim} initial="hidden" animate="show">
            <AnimatePresence exitBeforeEnter>
                <SIntro variants={introTextContainerAnimation}>
                    <div className="openingText brand"><motion.h1 variants={introTextAnimation}>HIMO</motion.h1></div>
                    <div className="openingText"><motion.h1 variants={introTextAnimation}>IS A</motion.h1></div>
                    <div className="openingText colored"><motion.h1 variants={introTextAnimation}>CREATIVE</motion.h1></div>
                    <div className="openingText colored"><motion.h1 variants={introTextAnimation}>STUDIO</motion.h1></div>
                    <motion.div variants={sliderContainerAnim}>
                        <Frame1 variants={sliderAnim} />
                        <Frame2 variants={sliderAnim} />
                        <Frame3 variants={sliderAnim} />
                        <Frame4 variants={sliderAnim} />
                    </motion.div>
                    
                </SIntro>
            </AnimatePresence>
            
        </SOpening>
        
    );
}

export const SOpening = styled(motion.div) `
    z-index: 10;
    width: 100%;
    min-height: 100vh;
    color: #EAE8DC;
    background: #1b1b1b;
    position: fixed;
    top: 0;
    left: 0;
`;

const SIntro = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;

    h1 {
        font-size: 4.2rem;
        font-family: 'Playfair Display', serif;
        letter-spacing: 5px;
    }

    .colored {
            color: #43A498;
        }
        
    .brand {
        color: #D6AB78
    }
    .openingText {
        
        overflow-y: hidden;
    }

`;

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 0px;
    width: 100%;
    height: 100vh;
    background: #43a49a;
`;

const Frame2 = styled(Frame1)`
    background: #4785ae
`;

const Frame3 = styled(Frame1)`
    background: #4d43a4
`;

const Frame4 = styled(Frame1)`
    background: #43A498;
`;





