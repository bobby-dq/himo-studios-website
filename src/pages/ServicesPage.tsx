// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion, AnimationControls } from 'framer-motion';

// Data
import { serviceData } from '../data/servicesData';

// Styles and animations
import { pageAnimation } from '../styles/animations';

// Components
import { Service } from '../components/Service';

export const ServicesPage: FunctionComponent = () => {
    const data = serviceData();
    return (
        <SService variants={pageAnimation} initial="hidden" animate="show">
            <SServiceHeader>
                <h1>OUR SERVICES</h1>
                <SLine transition={{duration: 0.75}} initial={{width: '0%'}} animate={{ width: '40%'}}></SLine>
            </SServiceHeader>
            <SServicesWrapper>
                {data.map(s => <Service service={s} key={s.name}></Service>)}
            </SServicesWrapper>
        </SService>
        
    );
}


const SService = styled(motion.div)`
    padding: 5rem 10rem;
    min-height: 90vh;

    @media (max-width: 1300px) {
        padding: 5rem 2rem;
    }
`;

const SServiceHeader = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0rem 0rem 5rem 0rem;

    h1 {
        font-family: 'Montserrat', sans-serif;
        color: #1b1b1b;
        font-size: 3.6rem;
        letter-spacing: 10px;
        font-weight: bolder;
        @media (max-width: 377px) {
            text-align: center    
        }
    }
`;

const SLine = styled(motion.div)`
    height: 0.5rem;
    background: #43A498;
    width: 40%;
    position: absolute;
    top: 5rem;

    @media (max-width: 850px) {
        width: 75%    
    }

    @media (max-width: 377px) {
        top: 10rem;    
    }
`;

const SServicesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
