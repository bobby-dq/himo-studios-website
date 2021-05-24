// Pacakges
import { FunctionComponent } from 'react';
import styled from 'styled-components';

// Styles and illustrations\\
import notFound from '../svgs/not-found.svg';

export const NotFound: FunctionComponent = () => {
    
    return  (
        <SNotFound>
            <div className="text-wrapper">
                <h1>Oops, see like we can't find what youre looking for..</h1>
            </div>
            <div className="image-wrapper">
                <img src={notFound} alt="" />
            </div>
            
        </SNotFound>
    );
}

const SNotFound = styled.div`
    padding: 10rem 5rem;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1300px) {
        padding: 10rem 2rem;
    }

    .text-wrapper {
        margin-bottom: 3rem;
        color: #EAE8DC;
        font-size: 2.4rem;
        font-family: 'Monteserrat', sans-serif;
        text-align: center;
    }

    .image-wrapper {
        width: 100%;
        img {
            width: 100%;
        }
    }
`




