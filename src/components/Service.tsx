// Packages
import { FunctionComponent } from 'react';
import { IService } from '../data/servicesData'; 
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface IServiceComponent {
    service: IService
}

export const Service: FunctionComponent<IServiceComponent> = (props) => {
    return (
        <SService>
            <SImageWrapper>
                <img src={props.service.image} alt={props.service.name} />
            </SImageWrapper>
            <STextWrapper>
                <div className="title">
                    <h1>{props.service.name}</h1>
                    <SLine></SLine>
                </div>
                <p>{props.service.description1}</p>
                <ul>
                    {props.service.subServices?.map(s => <li>{s}</li>)}
                </ul>
                <p>{props.service.description2}</p>
            </STextWrapper>
        </SService>
    );

}

const SService = styled.div`
    display: flex;
    padding: 5rem 0rem;
    justify-content: space-between;

    
`;

const SImageWrapper = styled.div`
    img {
        width: 50rem;
    }
`;

const STextWrapper = styled.div`
    margin-left: 5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;
    font-size: 2rem;
    .title {
        position: relative;
        margin-bottom: 2rem;
        h1 {
            font-family: 'Playfair Display', serif;
            letter-spacing: 3px;
            font-weight: bold;
            font-size: 2.4rem;
        }
    }

    ul {
        color: #43A498;
        margin: 1rem 1rem;
        list-style: circle;
        text-decoration: underline;
        font-weight: bold;
        letter-spacing: 1px;
    }
`

const SLine = styled(motion.div)`
    height: 0.5rem;
    background: #43A498;
    width: 75%;
    position: absolute;
    top: 3.25rem;
`;