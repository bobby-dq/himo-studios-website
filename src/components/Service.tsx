// Packages
import { FunctionComponent } from 'react';
import { IService } from '../data/servicesData'; 
import styled from 'styled-components';
import { motion, AnimationControls } from 'framer-motion';
import { Link } from 'react-router-dom';

// Styles and animation
import { useScroll } from '../styles/useScroll';
import { singleServiceLoadReveal } from '../styles/animations';

interface IServiceComponent {
    service: IService
}

export const Service: FunctionComponent<IServiceComponent> = (props) => {
    const [element, controls] = useScroll(0.10);

    return (
        <SService ref={element as (node?: Element | null | undefined) => void} animate={controls as AnimationControls} variants={singleServiceLoadReveal} initial="hidden">
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
                    {props.service.subServices?.map(s => <li key={s}>{s}</li>)}
                </ul>
                <div className="contact-link">
                    <Link to="/contact">{props.service.description2}</Link>
                </div>
            </STextWrapper>
        </SService>
    );

}

const SService = styled(motion.div)`
    display: flex;
    padding: 5rem 0rem;
    justify-content: space-between;
    @media(max-width: 850px) {
        flex-direction: column;
        align-items: center;
    }
    overflow: hidden;
    
`;

const SImageWrapper = styled.div`
    img {
        width: 50rem;

        @media(max-width: 850px) {
            margin-bottom: 2rem;
            width: 100%;
        }
    }
`;

const STextWrapper = styled.div`
    margin-left: 5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;
    font-size: 2rem; 

    .contact-link {
        padding: 0.5rem 1rem;
        background: #43A498;
        display: inline-block;
        cursor: pointer;
        border-radius: 2px;
        a {
            color: white;
            transition: all ease 0.33s;

            &:hover {
                box-shadow: 5px 5px 50px 10px rgba(67, 164, 153, 0.50);
                color: white;
            }
        }
    }

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

    @media(max-width: 850px) {
        margin-left: 0rem;
    }
`

const SLine = styled(motion.div)`
    height: 0.5rem;
    background: #43A498;
    width: 45%;
    position: absolute;
    top: 3.25rem;

`;