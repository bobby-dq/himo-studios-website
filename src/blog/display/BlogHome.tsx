// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Data
import { blogData, IBlog } from '../data/blogData';

// Animations
import { pageAnimation } from '../../styles/animations'

export const BlogHome: FunctionComponent = () => {
    const blogs: IBlog[] = blogData();

    return (
        <SBlogHome variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <STitle >
                <h1>Blog</h1>
                <SLine transition={{duration: 0.75}} initial={{width: '0%'}} animate={{ width: '25%'}}></SLine>
            </STitle>
            <div className="blogs-wrapper">
                {blogs.map(b => 
                    <SBlogItem key={b.id}>
                        <div className="image-wrapper">
                            <img src={b.image} alt={b.title} />
                        </div>
                        <div className="text-wrapper">
                            <Link to={b.url}><h1>{b.title}</h1></Link>
                            <p>by {b.author}</p>
                            <p>{b.date}</p>
                        </div>
                    </SBlogItem>
                )}
            </div>
        </SBlogHome>
    );
}

const SBlogHome = styled(motion.div)`
    min-height: 100vh;
    padding: 5rem 10rem;

    @media (max-width: 1300px) {
        padding: 5rem 2rem;
    }

    .blogs-wrapper {
        margin-top: 10rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
        grid-gap: 5rem;
    }
`;

const SBlogItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: rgba(27, 27, 27,0.10);   
    box-shadow: 5px 5px 10px 5px rgba(27, 27, 27, 0.25);
    transition: all 0.1515s ease-in-out;
    .image-wrapper {
        width: 100%;
        img {
            width: 100%;
            object-fit: cover;
        }
    }

    &:hover {
        background: rgba(27, 27, 27, 0.05);
    }

    .text-wrapper {
        padding: 1rem;
        font-family: 'Monteserrat', sans-serif;
        h1 {
            color: #1b1b1b;
            padding-bottom: 2rem;
            text-decoration: underline;
        }

        p {
            font-size: 1.6rem;
            color: #3b3b3b;
        }
    }
`;

const SLine = styled(motion.div)`
    height: 0.5rem;
    background: #43A498;
    width: 75%;
    position: absolute;
    top: 5rem;

`;

const STitle = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0rem 0rem 5rem 0rem;
    text-align: center;

    h1 {
        font-family: 'Montserrat', sans-serif;
        color: #1b1b1b;
        font-size: 3.6rem;
        letter-spacing: 10px;
        font-weight: bolder;
    }

    
`;