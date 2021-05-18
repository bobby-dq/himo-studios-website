// Packages
import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Components
import { Work } from '../components/Work'

// Data
import { organizationData } from '../data/organizationsData'

export const WorksPage: FunctionComponent = () => {
    const data = organizationData(); 
    return (
        <SWorks>
            <SOrgTitle>
                <h1>SEE SOME OF OUR WORK</h1>
                <SLine/>
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
`;

const SWorkGrid = styled(motion.div)`
    padding-top: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 0.5fr));
    grid-gap: 2rem;
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
    }
`;

const SLine = styled(motion.div)`
    height: 0.5rem;
    background: #43A498;
    width: 80%;
    position: absolute;
    top: 5rem;
`;