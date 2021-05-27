// Pacakages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion } from  'framer-motion';

// Data
import { IBlog } from '../data/blogData';

//Animations
import { blogMainImageAnimation } from '../../styles/animations';

interface IBlogHeader {
    blog: IBlog
}

export const BlogHeader: FunctionComponent<IBlogHeader> = (props) => {

    return (
        <SBlogHeader variants={blogMainImageAnimation} >
            <div className="text-wrapper">
                <h1>{props.blog.title}</h1>
                <p><em>by {props.blog.author}</em></p>
                <p><em>on {props.blog.date}</em></p>
            </div>
            <div className="image-wrapper">
                <img src={props.blog.image} alt={props.blog.title} />
            </div>
        </SBlogHeader>
    );
}

const SBlogHeader = styled(motion.div)`
    .text-wrapper {
        margin-bottom: 3rem;

        h1 {
            margin-bottom: 1rem;
        }
        
    }

    .image-wrapper {
        width: 100%;
        margin-bottom: 3rem;
        img {
            width: 100%;
            height: 50rem;
            object-fit: cover;
            object-position: center;
        }
    }
`;