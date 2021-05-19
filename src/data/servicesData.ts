import webDesign from '../svgs/web-design.svg';
import seo from '../svgs/seo.svg';
import videoPhoto from '../svgs/video-photo.svg';

export interface IService {
    name: string,
    description1: string,
    description2: string,
    subServices?: string[],
    image: string,
}

export const serviceData: () => IService[] = () => {
    return [
        {
            name: "Web Design",
            description1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ducimus alias labore consectetur voluptatem est, voluptatibus itaque iste, laboriosam quam enim laudantium culpa debitis quasi laborum mollitia sequi! Atque a quos debitis explicabo, cupiditate libero alias.",
            description2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ducimus alias labore consectetur voluptatem est, voluptatibus itaque iste, laboriosam quam enim laudantium culpa debitis quasi laborum mollitia sequi! Atque a quos debitis explicabo, cupiditate libero alias.",
            subServices: ["Web Design", "Web Development", "Web Applications", "Landing Pages", "Hosting and Deployment", "Maintenance"],
            image: webDesign
        },
        {
            name: "SEO",
            description1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ducimus alias labore consectetur voluptatem est, voluptatibus itaque iste, laboriosam quam enim laudantium culpa debitis quasi laborum mollitia sequi! Atque a quos debitis explicabo, cupiditate libero alias.",
            description2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ducimus alias labore consectetur voluptatem est, voluptatibus itaque iste, laboriosam quam enim laudantium culpa debitis quasi laborum mollitia sequi! Atque a quos debitis explicabo, cupiditate libero alias.",
            subServices: ["SocialMedia Management", "Search Engine Optimization (SEO)", "Google Ads and Analytics"],
            image: seo
        },
        {
            name: "Video / Photo",
            description1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ducimus alias labore consectetur voluptatem est, voluptatibus itaque iste, laboriosam quam enim laudantium culpa debitis quasi laborum mollitia sequi! Atque a quos debitis explicabo, cupiditate libero alias.",
            description2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ducimus alias labore consectetur voluptatem est, voluptatibus itaque iste, laboriosam quam enim laudantium culpa debitis quasi laborum mollitia sequi! Atque a quos debitis explicabo, cupiditate libero alias.",
            subServices: ["Social Media Video Advertisement", "Photography"],
            image: videoPhoto
        }
    ]
}