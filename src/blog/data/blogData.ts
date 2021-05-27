
export interface IBlog {
    title: string,
    author: string,
    date: string,
    image: string,
    url: string,
}

export const blogData: () => IBlog[] = () => {
    return [
        {
            title: "7 Essential Things Each Website Should Have",
            author: "Bobby Quilacio - Web Developer",
            date: "May 27, 2021",
            image: "../blog/blog1/img/main-img.jpg",
            url: "/blog/7-essential-things-each-website-should-have"
        }
        
    ]
}