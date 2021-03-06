// Packages
import { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { motion } from 'framer-motion';


// Photos and Logos
import himo_logo from '../img/himo_logo.png';

interface INavbar {
    navbarOpen: boolean,
    setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>,
    navColor: string,
}

export const Navbar: FunctionComponent<INavbar> = (props) => { 
    const location = useLocation().pathname;
    let textColor;
    location === "/services" || 
        location==="/contact" || 
        location.includes("/blog")? 
        textColor = "#1B1B1B" : textColor = "#EAE8DC";
    // console.log(props.showLogo);

    // Hooks and States

    // Event handlers
    const openNavbarHandler: () => void = () => {
        props.setNavbarOpen(!props.navbarOpen)
    }

    return (
        <SNav style={{background: props.navColor}}>
            <div className="logo">
                <Link to="/">
                    <img id="logo-img" src={himo_logo} alt="Himo Studio Logo"/>
                    <h1 id="logo-text">HIMO STUDIOS_</h1>
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
                        <Link style={{color: textColor}} to="/blog"><p>4. BLOG</p></Link>
                        <Sline transition={{duration: 0.75}} initial={{width: '0%'}} animate={{ width: location === '/blog'?'75%' :'0%'}}></Sline>
                    </Sli>
                    <Sli className="nav-link ">
                        <Link style={{color: textColor}} to="/contact"><p className="contact">5. CONTACT US!</p></Link>
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


export const SNav = styled(motion.div)`
    display: flex;
    padding: 2rem 10rem 1rem 10rem;
    min-height: 10vh;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    ul {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
    }


    #logo-text {
        font-family: 'Montserrat', sans-serif;
        font-size: 2.4rem;
        font-weight: bolder;
        letter-spacing: 2.8px;
        color: #D6AB78;
        padding-top: 1rem;
        text-shadow: inset 1px 1px #1b1b1b;
    }

    .logo {

        a {
            display: flex;
            flex-direction: column;

            img {
                margin-right: 1rem;
                width: 10rem;
            }
        }
    }



    p {
        &:hover {
            color: #43A498;
        }
    }

    .burger {
        display: none;
        transition: all 0.33s ease;
        cursor: pointer;
        
        span {
            display: block;
            padding: 0.25rem 2rem;
            background: #43A498;
            margin: 0.5rem 0rem;
        }
        
    }

    .contact {
        background: #73FFEE;
        color: black;
        transition: all 0.33s ease;
        border-radius: 5px;
        &:hover {
            
            color: #3c3b3b;
        }
        padding: 0 1rem;
    }

    @media (max-width: 1300px) {
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
            z-index: 10;
        }

        .nav-links {
            top: 10rem;
            width: 100%;
        }


        .nav-link {
            margin-bottom: 5rem;

        }

        

        p {
            color: #1b1b1b
        }
        
        .burger {
            display: block;
            position: fixed;
            top: 2rem;
            right: 2rem;
            z-index: 10
        }

        ul {
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
        }

        .open-nav {
            transform: translate(-25%);

        }

    }

    @media (max-width: 900px) { 
        .open-nav {
            transform: translate(-50%);
        }
    }

    @media (max-width: 600px) { 
        .open-nav {
            transform: translate(-75%);
        }
    }

`;

const Sli = styled(motion.li)`
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 3px;
    padding-left: 4rem;
    font-family: 'Montserrat', sans-serif;
    position: relative;

    @media (max-width: 1200px) {
        padding-bottom: 5rem;
    }
`;

const Sline = styled(motion.div)`
    height: 0.5rem;
    background: #43A498;
    width: 0.01%;
    position: absolute;
    top: 2.4rem;
    left: 4rem;
`;




