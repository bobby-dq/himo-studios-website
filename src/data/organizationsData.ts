import bonterraBuilt from '../img/bonterra-built.png';
import khMin from '../img/kh-min.png';
import moonCake from '../img/mooncake-sweets.png';
import teamGalo from '../img/team-galo-chicken.png';
import theGoldDigger from '../img/the-gold-digger.png';
import nextProject from '../img/next-project.png'

interface IOrganization {
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
            name: "MoonCake Sweets n' Treats",
            image: moonCake,
            backgroundColor: "#EAE8DC",
            works: [
                {
                    name: "Video",
                    link: "https://www.instagram.com/p/CLVR3yeDeNA/"
                },
                {
                    name: "Website",
                    link: "https://www.instagram.com/mooncakesweetsntreats/"
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
                    link: "https://www.instagram.com/p/CLVR3yeDeNA/"
                },
                {
                    name: "Video",
                    link: "https://www.instagram.com/p/CLVR3yeDeNA/"
                }
            ]
        },
        {
            name: "KH Min",
            image: khMin,
            backgroundColor: "#EAE8DC",
            works: [
                {
                    name: "Website",
                    link: "https://www.instagram.com/p/CLVR3yeDeNA/"
                },
                {
                    name: "Video",
                    link: "https://www.instagram.com/p/CLVR3yeDeNA/"
                }
            ]
        }, 
        {
            name: "Bonterra Built",
            image: bonterraBuilt,
            backgroundColor: "#1B1B1B",
            works: [
                {
                    name: "Website",
                    link: "https://www.instagram.com/p/CLVR3yeDeNA/"
                }
            ]
        },
        {
            name: "The Golddigger",
            image: theGoldDigger,
            backgroundColor: "#1B1B1B",
            works: [
                {
                    name: "SEO",
                    link: "https://www.instagram.com/p/CLVR3yeDeNA/"
                },
                {
                    name: "Social Media Management",
                    link: "https://www.instagram.com/p/CLVR3yeDeNA/"
                }
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