// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

// Styles, animations, and illustrations
import { heroWaveAnimation } from '../styles/animations'
import { ReactComponent as PhoneDesktopSVG} from '../svgs/hero-desktop-phone.svg'

export const Hero: FunctionComponent = () => {

    return (
        <SHero>
            <div className="hero-title">
                <div className="tiny-text">
                    <p>UNPARALLELED CRAFTMANSHIP</p>
                </div>
                <motion.div className="main-title">
                    <div className="main-title-text">
                        <h2>Expand your brand's</h2>
                    </div>
                    <div className="main-title-text colored-text">
                        <h2 className="colored-text">online presence</h2>
                    </div>
                    <div className="main-title-text">
                        <h2>with expert advice</h2>
                    </div>
                </motion.div>
                <Link to="/contact">Get Started</Link>
            </div>
            <div className="hero-img">
                <PhoneDesktopSVG />
            </div>
            <SWave viewBox="0 0 1440 363" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path variants={heroWaveAnimation} initial="hidden" animate="show" d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5" stroke="#D6AB78" strokeOpacity="0.2" strokeWidth="10"/>
            </SWave>
        </SHero>
    );
}

const SHero = styled.div`
    min-height: 50vh;
    padding: 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .main-title {
        margin-bottom: 5rem;
        h2 {
            font-size: 3.6rem;
            font-weight: lighter;
            font-family: 'Playfair Display', serif;
            color: #EAE8DA;      
        }

        .colored-text {
            color: #43A498;
        }

    }

   

    .hero-img, .hero-title{
        z-index: 2;
    }

    .hero-title {
        a {
            font-size: 2.4rem;
            font-weight: bold;
            color: #1b1b1b;
            padding: 0.5rem 3rem;
            font-family: 'Playfair Display', serif;
            background: #73FFEE;
            box-shadow: 5px 5px 100px 10px #43A498, inset 1px 1px 10px 0.5px rgba(0, 0, 0, 0.5);
        }
    }

    .tiny-text {
        font-size: 1.4rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        letter-spacing: 0.50rem;
        color: #817676
    }
`;

const SWave = styled.svg`
    position: absolute;
    left: 0;
`;



