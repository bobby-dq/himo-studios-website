// Packages
import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Organizations: FunctionComponent = () => {

    return (
        <SOrganizations>
            <SOrgTitle>
                <h1>Organizations we've worked with</h1>
                <SLine/>
            </SOrgTitle>
        </SOrganizations>

    );
}

const SOrganizations = styled(motion.div)`
    min-height: 90vh;
    
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
    background: #E88073;
    width: 40%;
    position: absolute;
    top: 5rem;
`;