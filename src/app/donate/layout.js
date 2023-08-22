export const metadata = {
    title: "Donate | Project Tech",
    description: "Help Project Tech continue to provide free and high-quality computer science education resources to students around the world. Every donation counts!",
    keywords: ["Donations", "Project Tech", "Computer Science Education", "Free Resources", "Support", "Non-Profit"],
    openGraph: {
        title: "Donate | Project Tech",
        description: "Help Project Tech continue to provide free and high-quality computer science education resources to students around the world. Every donation counts!",
        image: "/logo.jpg",
        url: "https://project-tech.org/donate",
    },
    twitter: {
        title: "Donate | Project Tech",
        description: "Help Project Tech continue to provide free and high-quality computer science education resources to students around the world. Every donation counts!",
        image: "/logo.jpg",
    }
}

export default function Layout({ children }) {
    return (
        <>
            {children}
        </>
    )
}