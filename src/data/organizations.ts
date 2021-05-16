import bonterraBuilt from '../img/bonterra-built.png';
import khMin from '../img/bonterra-built.png';
import moonCake from '../img/bonterra-built.png';
import teamGalo from '../img/bonterra-built.png';
import theGoldDigger from '../img/bonterra-built.png';

interface IOrganization {
    name: string,
    image: string, 
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
    ];
}