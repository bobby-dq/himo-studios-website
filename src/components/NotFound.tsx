// Pacakges
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styles and illustrations\\
import notFound from '../svgs/not-found.svg';

export const NotFound: FunctionComponent = () => {
    
    return  (
        <SNotFound>
            <div className="text-wrapper">
                <h1>Oops, seems like we can't find what youre looking for..</h1>
                <Link to="/">Back to Home</Link>
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

        h1 {
            margin-bottom: 2rem;
        }

        a {
            font-size: 2.4rem;
            font-weight: bold;
            color: #1b1b1b;
            padding: 0.5rem 3rem;
            font-family: 'Playfair Display', serif;
            background: #73FFEE;
            transition: all ease 0.33s;
            &:hover {
                box-shadow: 5px 5px 50px 10px #43A498;
                color: #3c3b3b;
            }
        }
    }

    .image-wrapper {
        width: 100%;
        img {
            width: 100%;
        }
    }
`




