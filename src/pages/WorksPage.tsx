// Packages
import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Components
import { Work } from '../components/Work'

// Data
import { organizationData } from '../data/organizationsData'

// Styles and animations
import { pageAnimation } from '../styles/animations';

export const WorksPage: FunctionComponent = () => {
    const data = organizationData();
    return (
        <SWorks variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <SOrgTitle>
                <h1>SEE SOME OF OUR WORK</h1>
                <SLine transition={{duration: 0.75}} initial={{width: '0%'}} animate={{ width: '80%'}}></SLine>
            </SOrgTitle>
            <SWorkGrid>
                {data.map(w => <Work work={w} key={w.name}></Work>)}
            </SWorkGrid>
        </SWorks>
        
    );
}

const SWorks = styled(motion.div)`
    padding: 5rem 10rem;
    min-height: 90vh;

    @media (max-width: 1300px) {
        padding: 5rem 2rem;
    }
`;

const SWorkGrid = styled(motion.div)`
    padding-top: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
    grid-gap: 5rem;

    @media(max-width: 430px) {
        grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    }
`;


const SOrgTitle = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-bottom: 5rem;

    h1 {
        font-family: 'Montserrat', sans-serif;
        color: #EAE8DC;
        font-size: 3.6rem;
        letter-spacing: 10px;
        font-weight: bolder;

        @media(max-width: 638px){
            text-align: center;
        }
    }
`;

const SLine = styled(motion.div)`
    height: 0.5rem;
    background: #43A498;
    width: 80%;
    position: absolute;
    top: 5rem;

    @media(max-width: 638px){
            top: 10rem;
    }
    @media(max-width:347px){
            top: 15rem;
    }
`;