export const metadata = {
    title: "Our Mission | Project Tech<",
    description: "Learn about our mission at Project Tech to provide free, quality, and accessible computer science education globally. Discover our values and what drives us to do what we do.",
    keywords: ["Mission", "Project Tech", "Computer Science Education", "Values", "Vision"],
    openGraph: {
        title: "Our Mission | Project Tech<",
        description: "Learn about our mission at Project Tech to provide free, quality, and accessible computer science education globally. Discover our values and what drives us to do what we do.",
        image: "/logo.jpg",
        url: "https://project-tech.org/mission",
    },
    twitter: {
        title: "Our Mission | Project Tech<",
        description: "Learn about our mission at Project Tech to provide free, quality, and accessible computer science education globally. Discover our values and what drives us to do what we do.",
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