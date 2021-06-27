// Packages
import { FunctionComponent } from 'react';
import { motion, AnimationControls } from 'framer-motion';
import styled from 'styled-components';

// Data
import { organizationData } from '../data/organizationsData';

// Styles and Animations
import { scrollReveal, workAnimation, serviceImageReveal } from '../styles/animations';
import { useScroll } from '../styles/useScroll';

export const Organizations: FunctionComponent = () => {
    const [element, controls] = useScroll(0.1);
    const data = organizationData();

    return (
        <SOrganizations ref={element as (node?: Element | null | undefined) => void} animate={controls as AnimationControls} variants={scrollReveal} initial="hidden">
            <SOrgTitle>
                <h1>Organizations we've worked with</h1>
                <SLine></SLine>
            </SOrgTitle>
            <SOrgDisplay>
                {data.map(d => <SOrganization variants={workAnimation}  key={d.name}><motion.img variants={serviceImageReveal} src={d.image} alt={d.name}/></SOrganization>)}
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
    background: transparent;
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

    @media(max-width: 500px) {
        text-align: center;
    }
`;

const SLine = styled(motion.div)`
    height: 0.5rem;
    background: #43A498;
    width: 75%;
    position: absolute;
    top: 5rem;

    @media(max-width: 500px) {
        top: 10rem;
        width: 75%;
    }
`;