// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';

// Components
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Organizations } from '../components/Organizations';

// Styles and animations


export const HomePage: FunctionComponent = () => {
    return (
        <SHomePage>
            <Hero />
            <About />
            <Organizations />
        </SHomePage>
    );
}

const SHomePage = styled.div`
    color: white;
    padding: 1rem 10rem;

    @media (max-width: 1300px) {
        padding: 1rem 2rem;
    }
`;