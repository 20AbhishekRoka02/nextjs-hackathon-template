import Pfp from '../_assets/team/pfp.png'


export type TeamType = {
    image: string
    name: string,
    role: string,
    twitter: string,
    website: string,
}


export const TeamList: TeamType[] = [
    {
        image: Pfp.src,
        name: "theN0madHacker",
        role: "Creator",
        twitter: "@descopeinc",
        website: "https://descope.com/"
    }
]