// Packages
import { FunctionComponent } from 'react';
import { Service } from '../components/Service';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Data
import { serviceData } from '../data/servicesData';


export const ServicesPage: FunctionComponent = () => {
    const data = serviceData();

    return (
        <SService>
            <SServiceHeader>
                <h1>OUR SERVICES</h1>
                <SLine/>
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
    }
`;

const SLine = styled(motion.div)`
    height: 0.5rem;
    background: #43A498;
    width: 40%;
    position: absolute;
    top: 5rem;
`;

const SServicesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
