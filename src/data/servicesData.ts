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
            description1: "We will provide you a responsive website. All our websites are designed and optimized to seamlessly perform on all devices - from your desktop to your tablet to your mobile phone. Here's a list of services we offer that's related to web design: ",
            description2: "Ready to build your website? Give us a shout!",
            subServices: ["Web Design and Maintenance", "Functinal Applications", "Landing Pages", "Hosting and Deployment", "Maintenance"],
            image: webDesign
        },
        {
            name: "SEO",
            description1: "Our SEO service is results-driven, and all of our websites are optimized with basic SEO. We offer web marketing services and develop content to expand your presence on Facebook, Instagram, LinkedIn, or any other social media platform. Here's a list of our online marketing services: ",
            description2: "Ready to expand your online presence? Just say hi!",
            subServices: ["Social Media Management", "Search Engine Optimization (SEO)", "Analytics", "Ads Campaigns"],
            image: seo
        },
        {
            name: "Video / Photo",
            description1: "Our team has a background in photography and videography. If you need a product advertisement or company photos, we got you covered! Here's just a couple of things we can do for you:",
            description2: "Get ready for a photo shoot and send us a message!",
            subServices: ["Social Media Video Advertisement", "Photography"],
            image: videoPhoto
        }
    ]
}