export interface IBlog {
    id: string,
    title: string,
    author: string,
    date: string,
    image: string,
    url: string,
    componentPath: string
}

export const blogData: () => IBlog[] = () => {
    return [
        {
            id: 'blog1',
            title: "7 Essential Things Each Website Should Have",
            author: "Bobby Quilacio - Web Developer",
            date: "May 27, 2021",
            image: "../blog1/main-img.jpg",
            url: "/blog/7-essential-things-each-website-should-have",
            componentPath: "../blog1/Blog"
        },
        
    ]
}