export const metadata = {
    title: "Join Our Team | Project Tech",
    description: "Join our team at Project Tech and contribute to the mission of providing quality computer science education to students globally. Volunteer with us and make a difference in the CS industry",
    keywords: ["EdTech", "Volunteer", "Join our team", "Computer Science Education", "Free Coding Courses", "Project Tech"],
    openGraph: {
        title: "Join Our Team | Project Tech",
        description: "Join our team at Project Tech and contribute to the mission of providing quality computer science education to students globally. Volunteer with us and make a difference in the CS industry",
        image: "/logo.jpg",
        url: "https://project-tech.org/join-team",
    },
    twitter: {
        title: "Join Our Team | Project Tech",
        description: "Join our team at Project Tech and contribute to the mission of providing quality computer science education to students globally. Volunteer with us and make a difference in the CS industry",
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