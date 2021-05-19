// Packages
import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Data
import { organizationData } from '../data/organizationsData'

export const Organizations: FunctionComponent = () => {
    const data = organizationData();

    return (
        <SOrganizations>
            <SOrgTitle>
                <h1>Organizations we've worked with</h1>
                <SLine/>
            </SOrgTitle>
            <SOrgDisplay>
                {data.map(d => <SOrganization style={{background: d.backgroundColor}} key={d.name}><img src={d.image} alt={d.name}/></SOrganization>)}
            </SOrgDisplay>
        </SOrganizations>

    );
}

const SOrganizations = styled(motion.div)`
    min-height: 90vh;
    padding: 0rem 0rem;
    
`;

const SOrgDisplay = styled(motion.div)`
    padding-top: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-gap: 1rem;
`;

const SOrganization = styled(motion.div)`
    border: 0.5rem solid #43A498;
    background: white;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    height: 30rem;

    img {
        width: 28rem;
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