// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';

// Components
import { Hero } from '../components/Hero'

// Styles and animations


export const HomePage: FunctionComponent = () => {
    return (
        <SHomePage>
            <Hero />
        </SHomePage>
    );
}

const SHomePage = styled.div`
    color: white;
`;