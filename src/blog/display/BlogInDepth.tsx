// Components
import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Data
import { blogData } from '../data/blogData';

// Components 
import { BlogHeader } from '../components/BlogHeader';

// Animations
import { pageAnimation } from '../../styles/animations'

export const BlogInDepth: FunctionComponent = () => {
    const url = useHistory().location.pathname;
    const blog = blogData().find(b => b.url === url) || UndefinedBlog
    return (
        <SBlogInDepth variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <BlogHeader blog={blog}></BlogHeader>
            <blog.component></blog.component>
        </SBlogInDepth>
        
    );
} 




const SBlogInDepth = styled(motion.div)`
    min-height: 100vh;
    padding: 5rem 10rem;
    color: #1b1b1b;
    font-family: 'Merriweather', serif;

    h1 {
        font-family: 'Playfair Display', serif; 
        font-size: 3.6rem;
    }

    h2 {
        font-family: 'Montserrat', sans-serif; 
        font-size:3rem;
        padding-bottom: 1rem;
    }

    p, li, a {
        font-size: 2.4rem;
        padding-bottom: 1.5rem;
        font-weight: lighter;
    }

    ul {
        list-style: circle;
        margin-left: 2rem;
    }

    em {
        font-size: 1.6rem;
    }


    @media (max-width: 1300px) {
        padding: 5rem 2rem;
    }

`;

export const SDiv = styled.div`
    margin-bottom: 2rem;
`;


export const UndefinedComponent: FunctionComponent= () => {
    
    return (
        <div></div>
    );
}

const UndefinedBlog = {
    id: 9999,
    title: "",
    author: "",
    date: "",
    image: "",
    url: "",
    component: UndefinedComponent,
}