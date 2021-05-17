// Packages
import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Data
import { organizationData } from '../data/organizationsData'

export const WorksPage: FunctionComponent = () => {
    const data = organizationData();

    return (
        <SWorks>
            <SOrgTitle>
                <h1>See some of our work</h1>
                <SLine/>
            </SOrgTitle>
            <SWorkGrid>
                {data.map(d => <SWork style={{background: d.backgroundColor}}><img src={d.image} alt={d.name}/></SWork>)}
            </SWorkGrid>
        </SWorks>

    );
}

const SWorks = styled(motion.div)`
    min-height: 90vh;
    padding: 5rem 10rem;
    
`;

const SWorkGrid = styled(motion.div)`
    padding-top: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
    grid-gap: 1rem;
`;

const SWork = styled(motion.div)`
    border: 0.5rem solid #43A498;
    background: white;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    height: 50rem;

    img {
        width: 50rem;
        object-position: center;
        object-fit: fit;
    }
`;

const SOrgTitle = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    h1 {
        font-family: 'Playfair Display', serif;
        font-size: 3.6rem;
        color: #EAE8DC;
        letter-spacing: 1px;
        font-weight: bold;
    }
`;

const SLine = styled(motion.div)`
    height: 0.5rem;
    background: #43A498;
    width: 40%;
    position: absolute;
    top: 5rem;
`;