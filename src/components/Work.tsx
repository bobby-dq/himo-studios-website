// Packages
import { FunctionComponent, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { IOrganization } from '../data/organizationsData';
import { Link } from 'react-router-dom';

// Data

interface IWork {
    work: IOrganization
}

export const Work: FunctionComponent<IWork> = (props) => {
    const [hover, setHover] = useState(false);
    return (
        <SWork style={{background: props.work.backgroundColor}} onMouseEnter={() => setHover(true)} onMouseLeave={()=>setHover(false)}>
            <img src={props.work.image} alt={props.work.name}/>
            <div className={`overlay ${hover ? 'hovered' : ''}`} >
                <h1>{props.work.name}</h1>
                <ul>{props.work.works.map(w => 
                    <li key={w.name}>
                        {w.link !== "/contact" ? 
                            <a href={w.link} target="_blank" rel="noreferrer">{w.name}</a> 
                            : <Link to={w.link}>{w.name}</Link> } 
                    </li>)}
                </ul>
            </div>
        </SWork>
    );
}

const SWork = styled(motion.div)`
    border: 0.5rem solid #43A498;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    height: 50rem;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    img {
        width: 45rem;
        object-position: center;
        object-fit: fit;

        @media(max-width: 430px) {
            width: 35rem;
        }
    }

    .overlay {
        position: absolute;
        padding: 5rem;
        width: 100%;
        height: 100%;
        top: 0;
        right: 100%;
        background: rgba(67, 164, 152, 0.75);
        font-family: 'Montserrat', sans-serif;
        color: #1b1b1b;
        transition: transform 0.33s ease;
        z-index: 1;
        cursor: auto;

        h1{
            font-size: 2.4rem;
            margin-bottom: 1rem;
        }
        ul {
            list-style: circle;
            margin: 1rem;
            font-size: 2.4rem;
            a {
                color: #1b1b1b;
                font-weight: bolder;
                text-decoration: underline;
                &:hover {
                    color: #384848;
                }
            }
        }
    
    }
    .hovered {
        transform: translateX(100%)
    }
`;
