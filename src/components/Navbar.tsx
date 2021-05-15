// Packages
import { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { motion } from 'framer-motion';

// Photos and Logos
import himo_logo from '../img/himo_logo.png';

interface INavbar {
    navbarOpen: boolean,
    setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Navbar: FunctionComponent<INavbar> = (props) => { 
    const location = useLocation().pathname;
    let textColor;
    location === "/services" || location==="/contact" ? textColor ="#1B1B1B" : textColor = "#EAE8DC";

    // Event handlers
    const openNavbarHandler: () => void = () => {
        props.setNavbarOpen(!props.navbarOpen)
    }

    return (
        <SNav>
            <div className="logo">
                <Link to="/">
                    <img id="logo-img" src={himo_logo} alt="Himo Studio Logo"/>
                    <h1 id="logo-text" >HIMO STUDIO_</h1>
                </Link>
            </div>
            <div className={`nav-links-wrapper ${props.navbarOpen ? 'open-nav' : ''}`}>
                <ul className="nav-links" onClick={openNavbarHandler}>
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
            <div onClick={openNavbarHandler} className="burger">
                <span className="burger1"></span>
                <span className="burger2"></span>
                <span className="burger3"></span>
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

    .burger {
        display: none;
        transition: all 0.33s ease;
        cursor: pointer;
        
        span {
            display: block;
            padding: 0.25rem 2rem;
            background: #E88073;
            margin: 0.5rem 0rem;
        }
        
    }

    @media (max-width: 1200px) {
        padding: 2rem 2rem;
        .nav-links-wrapper {
            flex-direction: column;
            position: fixed;
            left: 100%;
            align-items: flex-start;
            justify-content: space-between;
            width: 100%;
            height: 100%;
            background: #EAE8DC;
            padding-top: 10%;
            transition: transform 0.5s ease-in-out;
            top: 0px;
        }

        p {
            color: #1b1b1b
        }
        
        .burger {
            display: block;
            position: fixed;
            top: 2rem;
            right: 2rem;
            z-index: 3
        }

        #logo-img {
            display: none;
        }
        ul {
            flex-direction: column;
        }

        .open-nav {
            transform: translate(-100%);
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

    @media (max-width: 1200px) {
        padding-bottom: 5rem;
    }
`;

const Sline = styled(motion.div)`
    height: 0.5rem;
    background: #E88073;
    width: 0.01%;
    position: absolute;
    top: 2.4rem;
    left: 5rem;
`;




