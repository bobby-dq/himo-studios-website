import bonterraBuilt from '../img/bonterra-built.png';
import khMin from '../img/kh-min.png';
import moonCake from '../img/mooncake-sweets.png';
import teamGalo from '../img/team-galo-chicken.png';
import theGoldDigger from '../img/the-gold-digger.png';
import nextProject from '../img/next-project.png'

export interface IOrganization {
    name: string,
    image: string, 
    backgroundColor: string,
    works: IOrganizationWorks[],
}

interface IOrganizationWorks {
    name: string,
    link: string
}

export const organizationData: () => IOrganization[] = () => {
    return [
        {
            name: "Bonterra Built",
            image: bonterraBuilt,
            backgroundColor: "#1B1B1B",
            works: [
                {
                    name: "Website",
                    link: "http://www.bonterrabuilt.ca/"
                }
            ]
        },
        {
            name: "MoonCake Sweets n' Treats",
            image: moonCake,
            backgroundColor: "#EAE8DC",
            works: [
                {
                    name: "Video",
                    link: "https://www.youtube.com/watch?v=LYsD2dbQPrA"
                },
                {
                    name: "Website (Prototype Stage)",
                    link: "http://moon-cake.s3-website.ca-central-1.amazonaws.com/"
                }
            ]
        },
        {
            name: "Team Galo Jiu Jitsu",
            image: teamGalo,
            backgroundColor: "#EAE8DC",
            works: [
                {
                    name: "Website",
                    link: "/inprogress"
                },
                {
                    name: "Video",
                    link: "https://fb.watch/5DPAff_P0e/"
                }
            ]
        },
        {
            name: "KH Min",
            image: khMin,
            backgroundColor: "#EAE8DC",
            works: [
                {
                    name: "Video",
                    link: "https://fb.watch/5DPAff_P0e/"
                }
            ]
        }, 
        
        {
            name: "The Golddigger",
            image: theGoldDigger,
            backgroundColor: "#1B1B1B",
            works: [
                {
                    name: "SEO Social Media Management",
                    link: "https://www.facebook.com/Juvys-Gold-Jewellery-Shop-LTD-108779297481653"
                },
                {
                    name: "Video",
                    link: "/inprogress"
                },
            ]
        },
        {
            name: "Your Dream, Your Vision",
            image: nextProject,
            backgroundColor: "#1B1B1B",
            works: [
                {
                    name: "Contact Us",
                    link: "/contact"
                }
            ]
        },
    ];
}