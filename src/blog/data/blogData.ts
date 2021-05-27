// Packages
import { FunctionComponent } from 'react';

// Components
import { Blog0 } from '../blogPages/Blog0';
import { Blog1 } from '../blogPages/Blog1';
import { Blog2 } from '../blogPages/Blog2';

// Images
import blog0image from '../images/blog0/main-image.jpg';
import blog1image from '../images/blog1/main-image.jpg';
import blog2image from '../images/blog2/main-image.jpg';

export interface IBlog {
    id: number,
    title: string,
    author: string,
    date: string,
    image: string,
    url: string,
    component: FunctionComponent
}

export const blogData: () => IBlog[] = () => {
    return [
        {
            id: 2,
            title: "7 Essential Things Each Website Should Have",
            author: "Bobby Quilacio - Web Developer",
            date: "May 27, 2021",
            image: blog2image,
            url: "/blog/7-essential-things-each-website-should-have",
            component: Blog2,
        },
        {
            id: 1,
            title: "What Really Is An Seo?",
            author: "Shemae Sabo - SEO Specialist",
            date: "May 27, 2021",
            image: blog1image,
            url: "/blog/what-is-seo",
            component: Blog1
        },
        {
            id: 0,
            title: "Website Design Checklist",
            author: "Bobby Quilacio - Web Developer",
            date: "May 27, 2021",
            image: blog0image,
            url: "/blog/website-design-checklist",
            component: Blog0
        },
        
    ]
}