// Packages
import { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { motion } from 'framer-motion';

// Photos and Logos
import himo_logo from '../img/himo_logo.png';

export const Navbar: FunctionComponent = () => {
 
    const location = useLocation().pathname;
    let textColor;
    location === "/services" || location==="/contact" ? textColor ="#1B1B1B" : textColor = "#EAE8DC";

    return (
        <SNav>
            <div className="logo">
                <Link to="/">
                    <img id="logo-img" src={himo_logo} alt="Himo Studio Logo"/>
                    <h1 id="logo-text" >HIMO STUDIO_</h1>
                </Link>
            </div>
            <div className="nav-links-wrapper">
                <ul className="nav-links">
                    <Sli className="nav-link">
                        <Link style={{color: textColor}} to="/"><p>1. ABOUT</p></Link>
                        <Sline transition={{duration: 0.75}} initial={{width: '0%'}} animate={{ width: location === '/'?'75%' :'0%'}}></Sline>
                    </Sli>
                    <Sli className="nav-link">
                        <Link style={{color: textColor}} to="/services"><p>2. SERVICES</p></Link>
                        <Sline transition={{duration: 0.75}} initial={{width: '0%'}} animate={{ width: location === '/services'?'75%' :'0%'}}></Sline>
                    </Sli>
                    <Sli className="nav-link">
                        <Link style={{color: textColor}} to="/works"><p>3. WORK</p></Link>
                        <Sline transition={{duration: 0.75}} initial={{width: '0%'}} animate={{ width: location === '/works'?'75%' :'0%'}}></Sline>
                    </Sli>
                    <Sli className="nav-link">
                        <Link style={{color: textColor}} to="/faq"><p>4. FAQ</p></Link>
                        <Sline transition={{duration: 0.75}} initial={{width: '0%'}} animate={{ width: location === '/faq'?'75%' :'0%'}}></Sline>
                    </Sli>
                    <Sli className="nav-link">
                        <Link style={{color: textColor}} to="/contact"><p>5. CONTACT</p></Link>
                        <Sline transition={{duration: 0.75}} initial={{width: '0%'}} animate={{ width: location === '/contact'?'75%' :'0%'}}></Sline>
                    </Sli>
                </ul>
            </div>
        </SNav>
    );
}


export const SNav = styled.div`
    display: flex;
    background: transparent;
    padding: 2rem 10rem;
    min-height: 10vh;
    position: sticky;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    ul {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    #logo-text {
        font-family: 'Montserrat', sans-serif;
        font-size: 2.4rem;
        font-weight: bolder;
        letter-spacing: 2.8px;
        color: #D6AB78;
    }

    .logo {
        flex-basis: 1;
    }

    .nav-links-wrapper {
        flex-basis: 2;
    }

    p {
        &:hover {
            color: #E88073;
        }
    }

`;

const Sli = styled(motion.li)`
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 3px;
    padding-left: 5rem;
    font-family: 'Montserrat', sans-serif;
    position: relative;
`;

const Sline = styled(motion.div)`
    height: 0.5rem;
    background: #E88073;
    width: 0.01%;
    position: absolute;
    top: 2.4rem;
    left: 5rem;
`;


